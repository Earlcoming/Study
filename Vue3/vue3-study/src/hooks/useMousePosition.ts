import { ref, onMounted, onUnmounted } from "vue";

export default function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  const handleClick = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    console.log("onMounted");
    window.addEventListener("click", handleClick);
  });

  onUnmounted(() => {
    console.log("onUnmounted");
    window.removeEventListener("click", handleClick);
  });
  return { x, y };
}
