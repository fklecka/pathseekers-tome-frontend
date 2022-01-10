<template>
  <div
    class="
      h-56
      w-56
      bg-card
      flex flex-col
      justify-center
      items-center
      hover:bg-cardlight
      cursor-pointer
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="177.635"
      height="108.046"
      viewBox="0 0 177.635 108.046"
    >
      <g
        id="Tome_Logo_white"
        data-name="Tome Logo white"
        transform="translate(1.707 1.604)"
      >
        <path
          id="Pfad_1"
          data-name="Pfad 1"
          d="M345.6,146.258s8.835-9.171,34.5,4.112c0,0,13.145,5.457,26.428,5.4l2.751,11.586-62.486,65.513-52.169-24.227s-8.7,2.92-13.145-7.184l-40.7-15.576-1.528-6.512,59.139-46.957L315.3,135.7C316.828,136,335.553,132.12,345.6,146.258Z"
          transform="translate(-237.589 -132.41)"
          fill="none"
          stroke="#fff"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <path
          id="Pfad_2"
          data-name="Pfad 2"
          d="M406.533,147.69l-63.5,64.764h0s-16.2-9.171-17.166-9.966-17.853-14.17-35.416-12.473h0c-8.376-14.613-32.267-14.643-33.536-14.766s-17.7-3.959-17.7-3.959"
          transform="translate(-237.6 -124.334)"
          fill="none"
          stroke="#fff"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <line
          id="Linie_1"
          data-name="Linie 1"
          x1="55.134"
          y2="52.154"
          transform="translate(52.857 13.849)"
          fill="none"
          stroke="#fff"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <path
          id="Pfad_3"
          data-name="Pfad 3"
          d="M409.845,155.27l2.216.688.382,1.636-64.091,67.362-53.5-24.808c-11.846,1.3-15.5-7.811-15.5-7.811l-40.842-16.493-.352-1.529,2.919-1.742.29,1.192,40.7,15.576s3.852,9.966,13.145,7.184l52.169,24.227Z"
          transform="translate(-238.16 -120.328)"
          fill="#323131"
          stroke="#fff"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <path
          id="Pfad_4"
          data-name="Pfad 4"
          d="M302.28,188.52s9.064-16.814,9.263-30.938l6.114-7.643,10.47,17.272-6.619,8.392-1.926-14.873L315,166.3l-2.873,13.237Z"
          transform="translate(-204.27 -123.145)"
          fill="#fff"
        />
        <path
          id="Pfad_5"
          data-name="Pfad 5"
          d="M265.35,166.4s16.141-10.211,18.923-24.456l4.585,14.185,8.147-7.26-1.62,6.924-8.942,7.643-2.262-9.676S272.824,166.763,265.35,166.4Z"
          transform="translate(-223.789 -127.373)"
          fill="#fff"
        />
      </g>
    </svg>
    <h3 class="text-3xl mt-3">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style></style>
