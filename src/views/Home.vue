<template>
	<div class="bg-darkBlue h-screen">
    <div class="bg-aware">
      <p class="font-light text-sm text-center py-3">Welcome! Please be aware that this is an alpha development version. Data and accounts will be deleted every few days.</p>
    </div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 mt-10">
			<div class="flex justify-between items-center">
				<img class="w-36 sm:w-40 md:w-44 lg:w-52" src="@/assets/white_storj_backup.svg" />
				<div class="text-white space-x-10 font-semibold">
					<a href="#">Blog</a>
					<a href="#">Forum</a>
				</div>
			</div>
			<div class="mt-28 grid grid-cols-2 gap-4">
				<div>
					<h1 class="font-bold text-3xl text-white">
						Decentralized Cloud Backup
					</h1>
					<p class="text-white font-light mt-4">
						Easily backup folders from your <span class="underline">Windows</span>, <span class="underline">Mac</span>, or <span class="underline">Linux</span> directly to Storj DCS.
					</p>
					<Listbox as="div" v-model="selected">
						<div class="mt-1 relative">
							<ListboxButton class="bg-white relative w-60 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-storjBlue focus:border-storjBlue sm:text-sm">
								<span class="block truncate">{{ selected.name }}</span>
								<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
									<ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
								</span>
							</ListboxButton>

							<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
								<ListboxOptions class="absolute z-10 mt-1 w-60 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
									<ListboxOption as="template" v-for="system in systems" :key="system.id" :value="system" v-slot="{ active, selected }">
										<li :class="[active ? 'text-white bg-storjBlue' : 'text-gray-900', 'cursor-pointer select-none relative py-2 pl-3 pr-9']">
											<span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
												<img :src="imagePath(system.src)" class="w-5" />
												{{ system.name }}
											</span>

											<span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
												<CheckIcon class="h-5 w-5" aria-hidden="true" />
											</span>
										</li>
									</ListboxOption>
								</ListboxOptions>
							</transition>
						</div>
					</Listbox>
				</div>
				<div>
					<!-- <img src="" /> -->
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import { CloudDownloadIcon, ChevronDownIcon } from '@heroicons/vue/outline'

const systems = [
  { id: 1, name: "Download for Windows", src: "@/assets/icon-windows.svg" },
  { id: 2, name: "Download for Linux", src: "@/assets/icon-linux.svg" },
  { id: 3, name: "Download for iOS", src: "@/assets/icon-apple.svg" },
];

const imagePath = (path) => {
	return require(path);
};

export default defineComponent({
	name: "Home",
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
			imagePath,
      systems,
      selected,
    }
	}
})
</script>
