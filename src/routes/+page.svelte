<script>
	import { goto } from "$app/navigation";
</script>




<div class="flex justify-center my-10 w-6/12 mx-auto flex-col">
    <h1 class="text-5xl text-center mb-8 font-bold">Prepara tu futuro</h1>
    <button onclick={()=>goto("media_tecnicas/md_cc")} class="btn bg-yellow-200 mb-8">Comercio</button>
    <button onclick={()=>goto("media_tecnicas/md_sw")} class="btn bg-blue-500 mb-8">Sofware</button>
    <button onclick={()=>goto("media_tecnicas/md_dp")} class="btn bg-orange-400 mb-8">Deportes</button>
    <button onclick={()=>goto("media_tecnicas/md_dg")} class="btn bg-purple-500 mb-8">Diseño</button>
</div>clas
