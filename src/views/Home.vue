<template>
	<div class="bg-darkBlue">
		<div class="bg-aware">
			<p class="font-light text-sm text-center py-3">
				Welcome! Please be aware that this is an alpha development
				version. Data and accounts will be deleted every few days.
			</p>
		</div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 mt-5 py-10">
			<div class="flex justify-between items-center">
				<img
					class="w-36 sm:w-40 md:w-44 lg:w-52"
					src="@/assets/white_storj_backup.svg"
				/>
				<div class="text-white space-x-5 md:space-x-10 font-semibold">
					<a href="https://storj.io/blog" target="_blank">Blog</a>
					<a href="https://forum.storj.io/" target="_blank">Forum</a>
				</div>
			</div>
			<div class="mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-4">
				<div class="md:mr-28 mt-12">
					<h1
						class="
							font-bold
							text-4xl text-white text-center
							md:text-left
						"
					>
						<div>Decentralized</div>
						<div>Cloud Backup</div>
					</h1>
					<p
						class="
							text-white
							font-light
							mt-2
							text-center
							md:text-left
						"
					>
						Easily backup folders from your
						<span class="underline">Windows</span>,
						<span class="underline">Mac</span>, or
						<span class="underline">Linux</span> directly to Storj
						DCS.
					</p>

					<div class="flex justify-center md:justify-start">
						<download-dropdown></download-dropdown>
					</div>
				</div>
				<div class="mt-10 md:mt-0">
					<img src="@/assets/StorjBackupPreview.svg" />
				</div>
			</div>
			<!-- <div class="relative max-w-7xl mx-auto z-0">
				<div class="absolute bottom-0 left-0 w-1/4 z-0 p-10">
					<img src="@/assets/blocks.svg" />
				</div>
			</div> -->
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
			<!-- <iframe
				class="
					w-60
					h-auto
					sm:w-80 sm:h-48
					justify-self-center
					md:justify-self-start
				"
				src="https://www.youtube.com/embed/BpMbr1U6Z8I"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe> -->
			<video
				class="
					w-60
					sm:w-80 sm:h-48
					justify-self-center
					md:justify-self-start
				"
				controls
				src="@/assets/Storj_backup_sign_in_video.mp4"
			></video>
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
						Explorer, macOS Finder or Linux from Storj folder.
					</p>
				</div>
			</div>
		</div>
	</div>
	<footer-component></footer-component>
</template>

<script>
import { defineComponent } from "vue";
import DownloadDropdown from "../components/DownloadDropdown.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default defineComponent({
	name: "Home",
	components: {
		DownloadDropdown,
		FooterComponent
	}
});
</script>
