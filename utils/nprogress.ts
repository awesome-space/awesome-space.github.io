import NProgress from "nprogress";
NProgress.configure({ showSpinner: false, easing: 'ease', minimum: 0.0 });

export default NProgress

export const startSrollNProgress = () => {
  window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = winScroll / height;
    scrolled = Math.round(scrolled) === 1 ? 0.9999 : scrolled;
    NProgress.set(scrolled);
  }
}