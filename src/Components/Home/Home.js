import React, { useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function Comtainer(props) {
  const [main_ref, mainInView] = useInView();
  const animate_main_title = useAnimation();
  const animate_portfolio = useAnimation();
  const animate_moon = useAnimation();
  useEffect(() => {
    if (mainInView) {
      props.changeActivePage();
      animate_moon.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
      animate_main_title.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animate_portfolio.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animate_moon.start({
        x: -500,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
      animate_main_title.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animate_portfolio.start({
        y: "-100vh",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
  }, [mainInView]);

  useEffect(() => {
    let moon = document.getElementById("moon-img");
    moon.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let moonWidth = moon.clientWidth;
      let moonHeight = moon.clientHeight;
      let moveX = x / 10 - moonWidth / 10;
      let moveY = y / 10 - moonHeight / 10;
      moon.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
    moon.addEventListener("mouseout", () => {
      moon.style.transform = "";
    });

    //shadow
    let shadow_1 = document.getElementById("shadow-1-img");
    shadow_1.addEventListener("mousemove", (e) => {
      let shadow_1_X = e.offsetX;
      let shadow_1_Y = e.offsetY;
      let shadow_1_Width = shadow_1.clientWidth;
      let shadow_1_Height = shadow_1.clientHeight;
      let shadow_1_MoveX = shadow_1_X / 6 - shadow_1_Width / 6;
      let shadow_1_MoveY = shadow_1_Y / 6 - shadow_1_Height / 6;
      shadow_1.style.transform = `translateX(${shadow_1_MoveX}px) translateY(${shadow_1_MoveY}px)`;
    });
    shadow_1.addEventListener("mouseout", () => {
      shadow_1.style.transform = "";
    });

    let shadow_2 = document.getElementById("shadow-2-img");
    shadow_2.addEventListener("mousemove", (e) => {
      let shadow_2_X = e.offsetX;
      let shadow_2_Y = e.offsetY;
      let shadow_2_Width = shadow_2.clientWidth;
      let shadow_2_Height = shadow_2.clientHeight;
      let shadow_2_MoveX = shadow_2_X / 7 - shadow_2_Width / 7;
      let shadow_2_MoveY = shadow_2_Y / 7 - shadow_2_Height / 7;
      shadow_2.style.transform = `translateX(${shadow_2_MoveX}px) translateY(${shadow_2_MoveY}px)`;
    });
    shadow_2.addEventListener("mouseout", () => {
      shadow_2.style.transform = "";
    });
  });

  return (
    <motion.div className="main-container" ref={main_ref}>
      <p class="ribbon">
        <span class="text">
          <strong class="bold">Full Stack Web Developer</strong>
        </span>
      </p>
      <motion.section>
        <div className="main">
          <div className="moon">
            <motion.div animate={animate_portfolio} className="portfolio">
              portfolio
            </motion.div>
            <motion.svg
              id="moon-img"
              animate={animate_moon}
              className="moon-img"
              xmlns="http://www.w3.org/2000/svg"
              width="545"
              height="545"
              viewBox="0 0 545 545"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#FFFFFA"
                  d="M544.8,272.4 C544.8,422.842 422.843,544.799 272.401,544.799 C121.958,544.799 0,422.842 0,272.4 C0,121.958 121.958,0 272.401,0 C422.843,0 544.8,121.958 544.8,272.4"
                />
                <path
                  fill="#E6E6E6"
                  fill-opacity=".3"
                  d="M199.3739 191.5917C199.3739 224.4527 172.7349 251.0917 139.8739 251.0917 107.0129 251.0917 80.3739 224.4527 80.3739 191.5917 80.3739 158.7307 107.0129 132.0917 139.8739 132.0917 172.7349 132.0917 199.3739 158.7307 199.3739 191.5917M296.954 96.5917C296.954 117.6227 279.905 134.6717 258.874 134.6717 237.843 134.6717 220.794 117.6227 220.794 96.5917 220.794 75.5607 237.843 58.5117 258.874 58.5117 279.905 58.5117 296.954 75.5607 296.954 96.5917M293.2451 201.5917C293.2451 215.0517 282.3341 225.9627 268.8741 225.9627 255.4141 225.9627 244.5031 215.0517 244.5031 201.5917 244.5031 188.1317 255.4141 177.2207 268.8741 177.2207 282.3341 177.2207 293.2451 188.1317 293.2451 201.5917"
                />
              </g>
            </motion.svg>
            <motion.svg
              id="shadow-1-img"
              animate={animate_moon}
              className="front-shadow-1 shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="475"
              height="229"
              viewBox="0 0 475 229"
            >
              <g fill="#021630" fill-rule="evenodd">
                <path d="M306.1761 13.5799C306.1761 20.6199 299.2641 26.3799 290.8161 26.3799L136.7041 26.3799C128.2561 26.3799 121.3441 20.6199 121.3441 13.5799 121.3441 6.5399 128.2561.7799 136.7041.7799L290.8161.7799C299.2641.7799 306.1761 6.5399 306.1761 13.5799M48.1283 62.2195C48.1283 69.2595 41.2163 75.0205 32.7683 75.0205L15.3593 75.0205C6.9123 75.0205.0003 69.2595.0003 62.2195.0003 55.1805 6.9123 49.4195 15.3593 49.4195L32.7683 49.4195C41.2163 49.4195 48.1283 55.1805 48.1283 62.2195M350.7201 13.5799C350.7201 20.6199 344.9601 26.3799 337.9201 26.3799 330.8801 26.3799 325.1201 20.6199 325.1201 13.5799 325.1201 6.5399 330.8801.7799 337.9201.7799 344.9601.7799 350.7201 6.5399 350.7201 13.5799M431.1039 113.4197C431.1039 120.4597 424.1919 126.2197 415.7449 126.2197L398.3359 126.2197C389.8879 126.2197 382.9759 120.4597 382.9759 113.4197 382.9759 106.3797 389.8879 100.6197 398.3359 100.6197L415.7449 100.6197C424.1919 100.6197 431.1039 106.3797 431.1039 113.4197" />
                <path d="M458.7523,203.0203 L335.8723,203.0203 C327.4243,203.0203 320.5123,197.2593 320.5123,190.2193 C320.5123,183.1803 327.4243,177.4193 335.8723,177.4193 L342.5273,177.4193 C350.9763,177.4193 357.8883,171.6603 357.8883,164.6203 C357.8883,157.5803 350.9763,151.8203 342.5273,151.8203 L259.0713,151.8203 C250.6243,151.8203 243.7123,146.0603 243.7123,139.0203 C243.7123,131.9803 250.6243,126.2193 259.0713,126.2193 L359.4243,126.2193 C367.8723,126.2193 374.7833,120.4593 374.7833,113.4193 C374.7833,106.3793 367.8723,100.6203 359.4243,100.6203 L229.3763,100.6203 C220.9283,100.6203 214.0163,94.8603 214.0163,87.8203 C214.0163,80.7803 220.9283,75.0203 229.3763,75.0203 L336.8963,75.0203 C345.3443,75.0203 352.2563,69.2593 352.2563,62.2193 C352.2563,55.1803 345.3443,49.4193 336.8963,49.4193 L75.7753,49.4193 C67.3283,49.4193 60.4163,55.1803 60.4163,62.2193 C60.4163,69.2593 67.3283,75.0203 75.7753,75.0203 L173.5673,75.0203 C182.0163,75.0203 188.9283,80.7803 188.9283,87.8203 C188.9283,94.8603 182.0163,100.6203 173.5673,100.6203 L136.7043,100.6203 C128.2563,100.6203 121.3443,106.3793 121.3443,113.4193 C121.3443,120.4593 128.2563,126.2193 136.7043,126.2193 L136.1913,126.2193 C144.6403,126.2193 151.5523,131.9803 151.5523,139.0203 C151.5523,146.0603 144.6403,151.8203 136.1913,151.8203 L19.9683,151.8203 C11.5203,151.8203 4.6073,157.5803 4.6073,164.6203 C4.6073,171.6603 11.5203,177.4193 19.9683,177.4193 L221.1843,177.4193 C229.6323,177.4193 236.5443,183.1803 236.5443,190.2193 C236.5443,197.2593 229.6323,203.0203 221.1843,203.0203 L197.6323,203.0203 C189.1843,203.0203 182.2723,208.7803 182.2723,215.8203 C182.2723,222.8603 189.1843,228.6203 197.6323,228.6203 L458.7523,228.6203 C467.1993,228.6203 474.1113,222.8603 474.1113,215.8203 C474.1113,208.7803 467.1993,203.0203 458.7523,203.0203" />
              </g>
            </motion.svg>
            <motion.svg
              id="shadow-2-img"
              animate={animate_moon}
              className="front-shadow-2 shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="475"
              height="229"
              viewBox="0 0 475 229"
            >
              <g fill="#021630" fill-rule="evenodd">
                <path d="M306.1761 13.5799C306.1761 20.6199 299.2641 26.3799 290.8161 26.3799L136.7041 26.3799C128.2561 26.3799 121.3441 20.6199 121.3441 13.5799 121.3441 6.5399 128.2561.7799 136.7041.7799L290.8161.7799C299.2641.7799 306.1761 6.5399 306.1761 13.5799M48.1283 62.2195C48.1283 69.2595 41.2163 75.0205 32.7683 75.0205L15.3593 75.0205C6.9123 75.0205.0003 69.2595.0003 62.2195.0003 55.1805 6.9123 49.4195 15.3593 49.4195L32.7683 49.4195C41.2163 49.4195 48.1283 55.1805 48.1283 62.2195M350.7201 13.5799C350.7201 20.6199 344.9601 26.3799 337.9201 26.3799 330.8801 26.3799 325.1201 20.6199 325.1201 13.5799 325.1201 6.5399 330.8801.7799 337.9201.7799 344.9601.7799 350.7201 6.5399 350.7201 13.5799M431.1039 113.4197C431.1039 120.4597 424.1919 126.2197 415.7449 126.2197L398.3359 126.2197C389.8879 126.2197 382.9759 120.4597 382.9759 113.4197 382.9759 106.3797 389.8879 100.6197 398.3359 100.6197L415.7449 100.6197C424.1919 100.6197 431.1039 106.3797 431.1039 113.4197" />
                <path d="M458.7523,203.0203 L335.8723,203.0203 C327.4243,203.0203 320.5123,197.2593 320.5123,190.2193 C320.5123,183.1803 327.4243,177.4193 335.8723,177.4193 L342.5273,177.4193 C350.9763,177.4193 357.8883,171.6603 357.8883,164.6203 C357.8883,157.5803 350.9763,151.8203 342.5273,151.8203 L259.0713,151.8203 C250.6243,151.8203 243.7123,146.0603 243.7123,139.0203 C243.7123,131.9803 250.6243,126.2193 259.0713,126.2193 L359.4243,126.2193 C367.8723,126.2193 374.7833,120.4593 374.7833,113.4193 C374.7833,106.3793 367.8723,100.6203 359.4243,100.6203 L229.3763,100.6203 C220.9283,100.6203 214.0163,94.8603 214.0163,87.8203 C214.0163,80.7803 220.9283,75.0203 229.3763,75.0203 L336.8963,75.0203 C345.3443,75.0203 352.2563,69.2593 352.2563,62.2193 C352.2563,55.1803 345.3443,49.4193 336.8963,49.4193 L75.7753,49.4193 C67.3283,49.4193 60.4163,55.1803 60.4163,62.2193 C60.4163,69.2593 67.3283,75.0203 75.7753,75.0203 L173.5673,75.0203 C182.0163,75.0203 188.9283,80.7803 188.9283,87.8203 C188.9283,94.8603 182.0163,100.6203 173.5673,100.6203 L136.7043,100.6203 C128.2563,100.6203 121.3443,106.3793 121.3443,113.4193 C121.3443,120.4593 128.2563,126.2193 136.7043,126.2193 L136.1913,126.2193 C144.6403,126.2193 151.5523,131.9803 151.5523,139.0203 C151.5523,146.0603 144.6403,151.8203 136.1913,151.8203 L19.9683,151.8203 C11.5203,151.8203 4.6073,157.5803 4.6073,164.6203 C4.6073,171.6603 11.5203,177.4193 19.9683,177.4193 L221.1843,177.4193 C229.6323,177.4193 236.5443,183.1803 236.5443,190.2193 C236.5443,197.2593 229.6323,203.0203 221.1843,203.0203 L197.6323,203.0203 C189.1843,203.0203 182.2723,208.7803 182.2723,215.8203 C182.2723,222.8603 189.1843,228.6203 197.6323,228.6203 L458.7523,228.6203 C467.1993,228.6203 474.1113,222.8603 474.1113,215.8203 C474.1113,208.7803 467.1993,203.0203 458.7523,203.0203" />
              </g>
            </motion.svg>
            <motion.svg
              animate={animate_moon}
              className="back-shodow-1 shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="475"
              height="228"
              viewBox="0 0 475 228"
            >
              <g fill="#333" fill-rule="evenodd" opacity=".3">
                <path d="M167.9359 12.9599C167.9359 19.9999 174.8479 25.7599 183.2959 25.7599L337.4079 25.7599C345.8559 25.7599 352.7679 19.9999 352.7679 12.9599 352.7679 5.9199 345.8559.1599 337.4079.1599L183.2959.1599C174.8479.1599 167.9359 5.9199 167.9359 12.9599M425.9837 61.5995C425.9837 68.6395 432.8957 74.4005 441.3437 74.4005L458.7527 74.4005C467.1997 74.4005 474.1117 68.6395 474.1117 61.5995 474.1117 54.5605 467.1997 48.7995 458.7527 48.7995L441.3437 48.7995C432.8957 48.7995 425.9837 54.5605 425.9837 61.5995M123.3919 12.9599C123.3919 19.9999 129.1519 25.7599 136.1919 25.7599 143.2319 25.7599 148.9919 19.9999 148.9919 12.9599 148.9919 5.9199 143.2319.1599 136.1919.1599 129.1519.1599 123.3919 5.9199 123.3919 12.9599M43.0081 112.7997C43.0081 119.8397 49.9201 125.5997 58.3671 125.5997L75.7761 125.5997C84.2241 125.5997 91.1361 119.8397 91.1361 112.7997 91.1361 105.7597 84.2241 99.9997 75.7761 99.9997L58.3671 99.9997C49.9201 99.9997 43.0081 105.7597 43.0081 112.7997" />
                <path d="M15.3597,202.4003 L138.2397,202.4003 C146.6877,202.4003 153.5997,196.6393 153.5997,189.5993 C153.5997,182.5603 146.6877,176.7993 138.2397,176.7993 L131.5847,176.7993 C123.1357,176.7993 116.2237,171.0403 116.2237,164.0003 C116.2237,156.9603 123.1357,151.2003 131.5847,151.2003 L215.0407,151.2003 C223.4877,151.2003 230.3997,145.4403 230.3997,138.4003 C230.3997,131.3603 223.4877,125.5993 215.0407,125.5993 L114.6877,125.5993 C106.2397,125.5993 99.3287,119.8393 99.3287,112.7993 C99.3287,105.7593 106.2397,100.0003 114.6877,100.0003 L244.7357,100.0003 C253.1837,100.0003 260.0957,94.2403 260.0957,87.2003 C260.0957,80.1603 253.1837,74.4003 244.7357,74.4003 L137.2157,74.4003 C128.7677,74.4003 121.8557,68.6393 121.8557,61.5993 C121.8557,54.5603 128.7677,48.7993 137.2157,48.7993 L398.3367,48.7993 C406.7837,48.7993 413.6957,54.5603 413.6957,61.5993 C413.6957,68.6393 406.7837,74.4003 398.3367,74.4003 L300.5447,74.4003 C292.0957,74.4003 285.1837,80.1603 285.1837,87.2003 C285.1837,94.2403 292.0957,100.0003 300.5447,100.0003 L337.4077,100.0003 C345.8557,100.0003 352.7677,105.7593 352.7677,112.7993 C352.7677,119.8393 345.8557,125.5993 337.4077,125.5993 L337.9207,125.5993 C329.4717,125.5993 322.5597,131.3603 322.5597,138.4003 C322.5597,145.4403 329.4717,151.2003 337.9207,151.2003 L454.1437,151.2003 C462.5917,151.2003 469.5047,156.9603 469.5047,164.0003 C469.5047,171.0403 462.5917,176.7993 454.1437,176.7993 L252.9277,176.7993 C244.4797,176.7993 237.5677,182.5603 237.5677,189.5993 C237.5677,196.6393 244.4797,202.4003 252.9277,202.4003 L276.4797,202.4003 C284.9277,202.4003 291.8397,208.1603 291.8397,215.2003 C291.8397,222.2403 284.9277,228.0003 276.4797,228.0003 L15.3597,228.0003 C6.9127,228.0003 0.0007,222.2403 0.0007,215.2003 C0.0007,208.1603 6.9127,202.4003 15.3597,202.4003" />
              </g>
            </motion.svg>
            <motion.svg
              animate={animate_moon}
              className="back-shodow-2 shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="475"
              height="228"
              viewBox="0 0 475 228"
            >
              <g fill="#333" fill-rule="evenodd" opacity=".3">
                <path d="M167.9359 12.9599C167.9359 19.9999 174.8479 25.7599 183.2959 25.7599L337.4079 25.7599C345.8559 25.7599 352.7679 19.9999 352.7679 12.9599 352.7679 5.9199 345.8559.1599 337.4079.1599L183.2959.1599C174.8479.1599 167.9359 5.9199 167.9359 12.9599M425.9837 61.5995C425.9837 68.6395 432.8957 74.4005 441.3437 74.4005L458.7527 74.4005C467.1997 74.4005 474.1117 68.6395 474.1117 61.5995 474.1117 54.5605 467.1997 48.7995 458.7527 48.7995L441.3437 48.7995C432.8957 48.7995 425.9837 54.5605 425.9837 61.5995M123.3919 12.9599C123.3919 19.9999 129.1519 25.7599 136.1919 25.7599 143.2319 25.7599 148.9919 19.9999 148.9919 12.9599 148.9919 5.9199 143.2319.1599 136.1919.1599 129.1519.1599 123.3919 5.9199 123.3919 12.9599M43.0081 112.7997C43.0081 119.8397 49.9201 125.5997 58.3671 125.5997L75.7761 125.5997C84.2241 125.5997 91.1361 119.8397 91.1361 112.7997 91.1361 105.7597 84.2241 99.9997 75.7761 99.9997L58.3671 99.9997C49.9201 99.9997 43.0081 105.7597 43.0081 112.7997" />
                <path d="M15.3597,202.4003 L138.2397,202.4003 C146.6877,202.4003 153.5997,196.6393 153.5997,189.5993 C153.5997,182.5603 146.6877,176.7993 138.2397,176.7993 L131.5847,176.7993 C123.1357,176.7993 116.2237,171.0403 116.2237,164.0003 C116.2237,156.9603 123.1357,151.2003 131.5847,151.2003 L215.0407,151.2003 C223.4877,151.2003 230.3997,145.4403 230.3997,138.4003 C230.3997,131.3603 223.4877,125.5993 215.0407,125.5993 L114.6877,125.5993 C106.2397,125.5993 99.3287,119.8393 99.3287,112.7993 C99.3287,105.7593 106.2397,100.0003 114.6877,100.0003 L244.7357,100.0003 C253.1837,100.0003 260.0957,94.2403 260.0957,87.2003 C260.0957,80.1603 253.1837,74.4003 244.7357,74.4003 L137.2157,74.4003 C128.7677,74.4003 121.8557,68.6393 121.8557,61.5993 C121.8557,54.5603 128.7677,48.7993 137.2157,48.7993 L398.3367,48.7993 C406.7837,48.7993 413.6957,54.5603 413.6957,61.5993 C413.6957,68.6393 406.7837,74.4003 398.3367,74.4003 L300.5447,74.4003 C292.0957,74.4003 285.1837,80.1603 285.1837,87.2003 C285.1837,94.2403 292.0957,100.0003 300.5447,100.0003 L337.4077,100.0003 C345.8557,100.0003 352.7677,105.7593 352.7677,112.7993 C352.7677,119.8393 345.8557,125.5993 337.4077,125.5993 L337.9207,125.5993 C329.4717,125.5993 322.5597,131.3603 322.5597,138.4003 C322.5597,145.4403 329.4717,151.2003 337.9207,151.2003 L454.1437,151.2003 C462.5917,151.2003 469.5047,156.9603 469.5047,164.0003 C469.5047,171.0403 462.5917,176.7993 454.1437,176.7993 L252.9277,176.7993 C244.4797,176.7993 237.5677,182.5603 237.5677,189.5993 C237.5677,196.6393 244.4797,202.4003 252.9277,202.4003 L276.4797,202.4003 C284.9277,202.4003 291.8397,208.1603 291.8397,215.2003 C291.8397,222.2403 284.9277,228.0003 276.4797,228.0003 L15.3597,228.0003 C6.9127,228.0003 0.0007,222.2403 0.0007,215.2003 C0.0007,208.1603 6.9127,202.4003 15.3597,202.4003" />
              </g>
            </motion.svg>
          </div>
          <motion.div animate={animate_main_title} className="main-title">
            <div className="name">Sandeep Tottadi</div>
            <div>
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
            <div className="about">Freelance web developer / web designer</div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
