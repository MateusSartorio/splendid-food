<template>
  <footer>
    <p>Created by Mateus Sartorio</p>
    <p>Find me on</p>
      <a
        href="https://github.com/MateusSartorio"
        target="_blank"
      >
        <FontAwesomeIcon icon="fa-brands fa-github"/>
      </a>

      <a
        href="https://linkedin.com/in/mateus-sartorio-9609281a1"
        target="_blank"
      >
        <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
      </a>
  </footer>
</template>

<script lang="js">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin)

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>
