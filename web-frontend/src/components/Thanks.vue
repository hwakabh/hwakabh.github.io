<template>
  <slot name="message">
    <p>
      Thank you for contacting me!
    </p>
  </slot>

  <p>
    Please wait a while for response. <br />
    I will check email and reply back to <slot name="sender">you</slot>.
  </p>
</template>
