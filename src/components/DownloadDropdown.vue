<template>
	<Listbox as="div" v-bind:value="selected" class="mt-8">
		<div class="mt-1 relative">
			<ListboxButton
				class="
					bg-white
					relative
					w-64
					border border-gray-300
					rounded-md
					shadow-sm
					pl-3
					pr-10
					py-2
					text-left
					cursor-pointer
					focus:outline-none
					focus:ring-1
					focus:ring-storjBlue
					focus:border-storjBlue
					sm:text-sm
				"
			>
				<div class="flex space-x-2" v-on:click="selected.download">
					<img :src="selected.src" class="w-5" />
					<span class="block truncate">{{ selected.name }}</span>
				</div>
				<span
					class="
						absolute
						inset-y-0
						right-0
						flex
						items-center
						pr-2
						pointer-events-none
					"
				>
					<ChevronDownIcon
						class="h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
				</span>
			</ListboxButton>

			<transition
				leave-active-class="transition ease-in duration-100"
				leave-from-class="opacity-100"
				leave-to-class="opacity-0"
			>
				<ListboxOptions
					class="
						absolute
						z-10
						mt-1
						w-64
						bg-white
						shadow-lg
						max-h-60
						rounded-md
						py-1
						text-base
						ring-1 ring-black ring-opacity-5
						overflow-auto
						focus:outline-none
						sm:text-sm
					"
				>
					<ListboxOption
						as="template"
						v-for="system in systems"
						:key="system.os"
						:value="system"
						v-slot="{ active, selected }"
						v-on:click="system.download"
					>
						<li
							:class="[
								active
									? 'text-gray-700 bg-gray-300'
									: 'text-gray-900',
								'cursor-pointer select-none relative py-2 pl-3 pr-9'
							]"
						>
							<div class="flex space-x-2">
								<img :src="system.src" class="w-5" />
								<span
									:class="[
										selected
											? 'font-semibold'
											: 'font-normal',
										'block truncate'
									]"
								>
									{{ system.name }}
								</span>
							</div>
						</li>
					</ListboxOption>
				</ListboxOptions>
			</transition>
		</div>
	</Listbox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { CloudDownloadIcon, ChevronDownIcon } from "@heroicons/vue/outline";

interface System {
	name: string;
	os: string;
	src: string;
	download: (arg0: Event) => void;
}

interface Asset {
	browser_download_url: string;
}

interface Properties {
	systems: System[];
	selected: System;
}

export default defineComponent({
	name: "DownloadDropdown",
	components: {
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		CheckIcon,
		SelectorIcon,
		CloudDownloadIcon,
		ChevronDownIcon
	},
	setup(): Properties {
		function getOS(): String | null {
			const userAgent = window.navigator.userAgent,
				platform = window.navigator.platform,
				macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
				windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
				iosPlatforms = ["iPhone", "iPad", "iPod"];
			let os = null;

			if (macosPlatforms.indexOf(platform) !== -1) {
				os = "Mac OS";
			} else if (iosPlatforms.indexOf(platform) !== -1) {
				os = "iOS";
			} else if (windowsPlatforms.indexOf(platform) !== -1) {
				os = "Windows";
			} else if (/Android/.test(userAgent)) {
				os = "Android";
			} else if (!os && /Linux/.test(platform)) {
				os = "Linux";
			}

			return os;
		}

		const assertsIsAsset: (
			valueToTest: any
		) => asserts valueToTest is Asset[] = (valueToTest) => {
			const allDownloadUrls = valueToTest?.every(
				(value: any) =>
					value instanceof Object &&
					typeof value?.browser_download_url === "string"
			);

			if (!allDownloadUrls) {
				throw new Error(
					"Unable to retrieve download links from GitHub repository."
				);
			}
		};

		const getReleases = async (): Promise<any> => {
			const response = await fetch(
				"https://api.github.com/repos/storjrd/backup/releases/latest"
			);

			return response.json();
		};

		const releasesPromise = getReleases();

		const download =
			(extension: string): ((e: Event) => Promise<void>) =>
			async (e: Event): Promise<void> => {
				e.preventDefault();
				e.stopPropagation();

				const assets = (await releasesPromise)?.assets;
				assertsIsAsset(assets);

				const release = assets.find((release: Asset) =>
					release.browser_download_url
						.toLowerCase()
						.endsWith(extension)
				);

				if (release) {
					window.open(release.browser_download_url);
				}
			};

		const systems: System[] = [
			{
				name: "Download for Windows",
				os: "Windows",
				src: require("@/assets/icon-windows.svg"),
				download: download(".exe")
			},
			{
				name: "Download for Linux",
				os: "Linux",
				src: require("@/assets/icon-linux.svg"),
				download: download(".appimage")
			},
			{
				name: "Download for MacOS",
				os: "Mac",
				src: require("@/assets/icon-apple.svg"),
				download: download(".dmg")
			}
		];

		const OS = getOS();
		let selected = systems[0];

		if (OS === "Linux") {
			selected = systems[1];
		} else if (OS === "Mac OS") {
			selected = systems[2];
		}

		return {
			systems,
			selected
		};
	}
});
</script>
