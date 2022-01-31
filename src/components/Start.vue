<template>
	<div class="h-screen">
		<div class="bg-darkBlue">
			<navigation></navigation>
		</div>
		<main class="my-10 px-5 md:px-10 lg:px-28">
			<h1 class="font-bold text-2xl mb-4">
				Getting Started With Storj Backup
			</h1>
			<div class="space-y-2">
				<p>If you prefer, here's a video walkthrough:</p>

				<video
					class="pt-4 pb-8"
					controls
					width="585"
					src="@/assets/Storj_backup_sign_in_video.mp4"
				></video>

				<p>
					If you haven’t yet signed up for Storj, you can do that
					<a
						class="text-storjBlue underline"
						href="https://us1.storj.io/signup"
						target="_blank"
						>here</a
					>.
				</p>

				<p>
					Start by logging into
					<a
						class="text-storjBlue underline"
						href="https://us1.storj.io/login"
						target="_blank"
						>your Storj account</a
					>, where you’ll be presented with your dashboard.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_dashboard.png"
				/>

				<p>
					On the sidebar to the left, click on the
					<span class="font-bold">Access</span> tab, where you’ll be
					prompted to create an access grant. Next, click on the
					<span class="font-bold">Create Access Grant</span> button.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_create_first_access_grant.png"
				/>

				<p>
					After clicking on
					<span class="font-bold">Create Access Grant</span>, you’ll
					be asked to enter a name. Please do so.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_access_grant_name.png"
				/>

				<p>
					You’ll then be able to assign the appropriate permissions to
					this access grant. After doing so, click on the
					<span class="font-bold">Continue in Browser</span> button.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_access_permissions.png"
				/>

				<p>
					In the Encryption Passphrase step, you’ll be guided to copy
					the provided passphrase or generate your own. You must save
					this passphrase as it’s how you’ll be able to access your
					data, and Storj only displays it once. After saving your
					passphrase and checking off the required checkbox, click the
					<span class="font-bold">Next</span> button.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_encryption_passphrase.png"
				/>

				<p>
					You’ll be asked to copy your Access Grant on the Generate
					Access Grant page. Please do so and store it in a safe
					place. After doing so, click on the link,
					<span class="font-bold"
						>Generate S3 Gateway Credentials</span
					>, at the bottom of the modal.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_generate_access_grant.png"
				/>

				<p>
					Next, click on the
					<span class="font-bold">Generate Credentials button</span>.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_generate_credentials.png"
				/>

				<p>
					Copy all of the following S3 Gateway Credentials and store
					them in a safe place. These credentials are what you’ll use
					to log into Storj Backup. After you’re done copying them,
					click on the <span class="font-bold">Done</span> button.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_s3_gateway.png"
				/>

				<p>We’re almost done, I promise!</p>

				<p>
					We now need to create a bucket that’ll store all of our
					data. On the sidebar navigation, click on
					<span class="font-bold">Buckets</span>.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_buckets.png"
				/>

				<p>
					Then click on the
					<span class="font-bold">New Bucket</span> button on the top
					right of the page, give your bucket a name, save it
					somewhere safe, and click on the
					<span class="font-bold">Create Bucket</span> button.
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_create_bucket.png"
				/>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_bucket_created.png"
				/>

				<p>
					Logging into Backup is pretty straightforward after you
					retrieve your credentials from your Storj account.
				</p>
				<p>
					When you open up the Backup app, you’ll be presented with
					the following:
				</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_backup_login.png"
				/>

				<p>
					Copy the <span class="font-bold">Access Key</span>,
					<span class="font-bold">Secret Key</span>,
					<span class="font-bold">Endpoint</span>, and
					<span class="font-bold">Bucket</span> from your Storj
					account and paste them into their appropriate input fields.
				</p>

				<p>
					The <span class="font-bold">Restic Password</span> field is
					the password you wish all of your files to be further
					encrypted by. You need this password to be able to access
					the files that you’re backing up.
				</p>

				<p>Here’s an example of what all of this would look like.</p>

				<img
					class="py-4 w-auto h-48 sm:h-60 md:h-96"
					src="@/assets/Storj_backup_credentials.png"
				/>

				<p>
					After you have all of the fields properly filled out, just
					click on the <span class="font-bold">Sign in</span> button
					and you’re good to go!
				</p>
			</div>
		</main>
		<footer-component></footer-component>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import Navigation from "./Navigation.vue";
import FooterComponent from "./FooterComponent.vue";

export default defineComponent({
	name: "Start",
	components: {
		FooterComponent,
		Navigation
	},
	setup() {}
});
</script>
