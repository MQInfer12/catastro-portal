<script lang="ts">
  import { fade } from "svelte/transition";
  import Logo from "../../assets/images/logococha.png";
</script>

<div out:fade={{ duration: 800 }}>
  <img src={Logo} alt="cocha-logo" />
  <h1>Portal de información Catastral</h1>
  <small>Infraestructura de datos espaciales de Cochabamba</small>
  <span class="loader"></span>
</div>

<style>
  div {
    position: fixed;
    z-index: 1000;
    inset: 0;
    background-color: var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    padding: 0 24px;
  }
  img {
    width: 220px;
  }
  h1 {
    margin-top: 20px;
    color: var(--gray-700);
  }
  small {
    color: var(--gray-400);
  }
  .loader {
    color: #ffffff;
    font-size: 32px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    transform: translateZ(0);
    animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
    margin-top: 40px;
  }

  @keyframes mltShdSpin {
    0%, 5%, 95%, 100% {
      box-shadow: 
        0 -0.83em 0 -0.4em var(--yellow-2),
        0 -0.83em 0 -0.42em var(--red-2),
        0 -0.83em 0 -0.44em var(--purple-2),
        0 -0.83em 0 -0.46em var(--blue-2),
        0 -0.83em 0 -0.477em var(--green-2);
    }
    10%, 59% {
      box-shadow: 
        0 -0.83em 0 -0.4em var(--yellow-2),
        -0.087em -0.825em 0 -0.42em var(--red-2),
        -0.173em -0.812em 0 -0.44em var(--purple-2),
        -0.256em -0.789em 0 -0.46em var(--blue-2),
        -0.297em -0.775em 0 -0.477em var(--green-2);
    }
    20% {
      box-shadow: 
        0 -0.83em 0 -0.4em var(--yellow-2),
        -0.338em -0.758em 0 -0.42em var(--red-2),
        -0.555em -0.617em 0 -0.44em var(--purple-2),
        -0.671em -0.488em 0 -0.46em var(--blue-2),
        -0.749em -0.34em 0 -0.477em var(--green-2);
    }
    38% {
      box-shadow: 
        0 -0.83em 0 -0.4em var(--yellow-2),
        -0.377em -0.74em 0 -0.42em var(--red-2),
        -0.645em -0.522em 0 -0.44em var(--purple-2),
        -0.775em -0.297em 0 -0.46em var(--blue-2),
        -0.82em -0.09em 0 -0.477em var(--green-2);
    }
  }

  @keyframes round {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
</style>