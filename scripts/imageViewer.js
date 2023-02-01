import "@fancyapps/ui/dist/fancybox.css";

import { Fancybox } from "@fancyapps/ui";

Fancybox.bind('[data-fancybox="answer-img"]', {
  animated: false,
  showClass: false,
  hideClass: false,

  closeButton: "top",
  click: "close",
  dragToClose: false,

  Image: {
    zoom: true,
    click: true,
    fit: "contain-w",
  },
});