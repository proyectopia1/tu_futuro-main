<script>
	let { data } = $props();
</script>

<div class="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h1 class="mb-8 border-b pb-4 text-3xl font-bold text-gray-900">Noticias</h1>

		<div class="rounded-lg bg-white shadow-sm">
			<ul class="divide-y divide-gray-100">
				{#each data.posts as post (post.id)}
					<li class="transition duration-150 ease-in-out hover:bg-gray-50">
						<a
							href={`/noticias/editar/art/${post.id}`}
							data-sveltekit-reload
							class="block px-6 py-4 text-lg font-medium text-gray-700 hover:text-indigo-600"
						>
							{post.titulo}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
