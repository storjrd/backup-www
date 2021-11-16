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
				<div class="flex space-x-2">
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

const systems = [
	{
		id: 1,
		name: "Download for Windows",
		src: require("@/assets/icon-windows.svg")
	},
	{
		id: 2,
		name: "Download for Linux",
		src: require("@/assets/icon-linux.svg")
	},
	{ id: 3, name: "Download for iOS", src: require("@/assets/icon-apple.svg") }
];

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
		const selected = ref(systems[0]);

		return {
			systems,
			selected
		};
	}
});
</script>
