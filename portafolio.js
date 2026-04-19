<script>
document.querySelectorAll("a").forEach(btn => {
    btn.addEventListener("click", function () {
        this.classList.add("loading");

        setTimeout(() => {
            this.classList.remove("loading");
        }, 1200);
    });
});
</script>