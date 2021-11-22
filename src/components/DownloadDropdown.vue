<template>
	<Listbox as="div" v-model="selected" class="mt-8">
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
				<div
					class="flex space-x-2"
					v-on:click="downloadFromSelected($event)"
				>
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
						:key="system.id"
						:value="system"
						v-slot="{ active, selected }"
						v-on:click="downloadFromDropdown(system.os)"
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

<script>
import { defineComponent, ref } from "vue";
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { CloudDownloadIcon, ChevronDownIcon } from "@heroicons/vue/outline";

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
	setup() {
		function getOS() {
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

		const download = async (OSToDownload) => {
			const data = await fetch(
				"https://api.github.com/repos/storjrd/backup/releases/latest"
			);
			const response = await data.json();
			const assets = response.assets;
			const linux = assets[0].browser_download_url;
			const windows = assets[1].browser_download_url;

			if (OSToDownload === "Linux") {
				window.open(linux);
			} else if (OSToDownload === "Mac") {
				window.open("https://github.com/storjrd/backup");
			} else {
				window.open(windows);
			}
		};

		const downloadFromSelected = (e) => {
			e.preventDefault();
			e.stopPropagation();
			download(selected.value.os);
		};

		const downloadFromDropdown = (OSToDownload) => {
			download(OSToDownload);
		};

		const systems = [
			{
				id: 1,
				name: "Download for Windows",
				os: "Windows",
				src: require("@/assets/icon-windows.svg")
			},
			{
				id: 2,
				name: "Download for Linux",
				os: "Linux",
				src: require("@/assets/icon-linux.svg")
			},
			{
				id: 3,
				name: "Download for MacOS",
				os: "Mac",
				src: require("@/assets/icon-apple.svg")
			}
		];

		const OS = getOS();
		let selected = ref(systems[0]);

		if (OS === "Linux") {
			selected.value = systems[1];
		} else if (OS === "Mac OS") {
			selected.value = systems[2];
		}

		return {
			systems,
			selected,
			downloadFromSelected,
			downloadFromDropdown
		};
	}
});
</script>
