<template>
    <div class="wq-foot  h30 lh30 pl10  bdc bgf0 footer">
      Copyright &copy; {{getYear}} <a target="_blank" href="#">mujiejun</a>. All rights reserved. 
      <span class="r pr10">
    </span>
  </div>
</template>
<script type="text/javascript">
	export default {
		computed: {
			getYear() {
				let y = new Date().getFullYear();
				let showY = y;
				if (y > 2017) {
					showY = "2017-" + y;
				}
				return showY;
			}
		}
	}
</script>
<style>
.footer{
	text-align: center;
	
}

</style>
