<template>
	<div class="bg-darkBlue">
		<div class="bg-aware">
			<p class="font-light text-sm text-center py-3">
				Welcome! Please be aware that this is an alpha development
				version. Data and accounts will be deleted every few days.
			</p>
		</div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 mt-5">
			<div class="flex justify-between items-center">
				<img
					class="w-36 sm:w-40 md:w-44 lg:w-52"
					src="@/assets/white_storj_backup.svg"
				/>
				<div class="text-white space-x-10 font-semibold">
					<a href="#">Blog</a>
					<a href="#">Forum</a>
				</div>
			</div>
			<div class="mt-20 grid grid-cols-2 gap-4">
				<div class="mr-28">
					<h1 class="font-bold text-4xl text-white">
						<div>Decentralized</div>
						<div>Cloud Backup</div>
					</h1>
					<p class="text-white font-light mt-2">
						Easily backup folders from your
						<span class="underline">Windows</span>,
						<span class="underline">Mac</span>, or
						<span class="underline">Linux</span> directly to Storj
						DCS.
					</p>
					<download-dropdown></download-dropdown>
				</div>
				<div class="relative overflow-none">
					<img class="shadow-none" src="@/assets/backup1.svg" />
					<img
						class="absolute top-16 left-56 h-96"
						src="@/assets/backup2.svg"
					/>
				</div>
			</div>
			<div class="max-w-7xl mx-auto mt-8">
				<div class="w-1/4">
					<img src="@/assets/blocks.svg" />
				</div>
			</div>
		</div>
	</div>
	<div
		class="
			grid grid-cols-1
			md:grid-cols-2 md:gap-4
			max-w-7xl
			mx-auto
			px-8
			md:px-6
			lg:px-20
			my-20
		"
	>
		<div class="grid">
			<iframe
				class="w-80 h-48 justify-self-center md:justify-self-start"
				src="https://www.youtube.com/embed/BpMbr1U6Z8I"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<h2
				class="
					font-bold
					text-4xl text-black
					mt-8
					text-center
					md:text-left
				"
			>
				Get Storj Backup
			</h2>
			<p class="mt-2 text-center md:text-left md:mr-40">
				Seamless experience to back up your files from your desktop
			</p>
			<div class="justify-self-center md:justify-self-start">
				<download-dropdown></download-dropdown>
			</div>
		</div>
		<div class="justify-self-center mt-14 md:mt-0">
			<div class="flex">
				<div class="mr-4 flex-shrink-0">
					<img class="w-16" src="@/assets/save-icon.svg" />
				</div>
				<div>
					<h4 class="text-lg font-bold">Safe</h4>
					<p class="mt-1">
						Choose folders on your computer to sync with Storj and
						store all around the world.
					</p>
				</div>
			</div>
			<div class="flex mt-8">
				<div class="mr-4 flex-shrink-0">
					<img class="w-16" src="@/assets/accessible-icon.svg" />
				</div>
				<div>
					<h4 class="text-lg font-bold">Accessible</h4>
					<p class="mt-1">
						Stream or mirror files and folders from Storj to your
						computer.
					</p>
				</div>
			</div>
			<div class="flex mt-8">
				<div class="mr-4 flex-shrink-0">
					<img class="w-16" src="@/assets/connected-icon.svg" />
				</div>
				<div>
					<h4 class="text-lg font-bold">Connected</h4>
					<p class="mt-1">
						Sync and access files from your Storj account from your
						computer.
					</p>
				</div>
			</div>
			<div class="flex mt-8">
				<div class="mr-4 flex-shrink-0">
					<img class="w-16" src="@/assets/easy-icon.svg" />
				</div>
				<div>
					<h4 class="text-lg font-bold">Easy</h4>
					<p class="mt-1">
						Organize and access all your files in Windows File
						Explorer, macOS Finder or Linux (add name) from Storj
						folder.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-darkBlue pt-8 pb-24">
		<div class="grid grid-cols-1 md:grid-cols-12 md:gap-10 px-10">
			<div
				class="md:col-span-5 justify-self-center md:justify-self-start"
			>
				<img class="w-24" src="@/assets/simple-white-storj-logo.svg" />
			</div>
			<div
				class="
					text-white
					md:col-span-2
					mt-8
					md:mt-0
					text-center
					md:text-left
				"
			>
				<h3 class="font-semibold text-base">Product</h3>
				<div class="font-extralight space-y-3 mt-3">
					<a class="block">Pricing</a>
					<a class="block">How it works</a>
					<a class="block">Why Storj DCS</a>
				</div>
			</div>
			<div
				class="
					text-white
					md:col-span-2
					mt-8
					md:mt-0
					text-center
					md:text-left
				"
			>
				<h3 class="font-semibold text-base">Resources</h3>
				<div class="font-extralight space-y-3 mt-3">
					<a class="block">Integreations</a>
					<a class="block">Docs</a>
					<a class="block">Support</a>
					<a class="block">Forum</a>
				</div>
			</div>
			<div
				class="
					text-white
					md:col-span-2
					mt-8
					md:mt-0
					text-center
					md:text-left
				"
			>
				<h3 class="font-semibold text-base">Company</h3>
				<div class="font-extralight space-y-3 mt-3">
					<a class="block">Blog</a>
					<a class="block">About us</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import DownloadDropdown from "../components/DownloadDropdown.vue";

export default defineComponent({
	name: "Home",
	components: {
		DownloadDropdown
	},
	setup() {}
});
</script>
