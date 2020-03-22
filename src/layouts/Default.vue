<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </h1>
      <hr>
      <nav class="nav">
        <ul>
          <li><g-link to="/photography/">Photography</g-link></li>
          <li><g-link to="/programming/">Programming</g-link></li>
          <li><g-link to="/darkroom/">Darkroom</g-link></li>
        </ul>
      </nav>
    </header>
    <content>
      <slot/>
    </content>
    <footer>
      <g-link to="/contact/">Contact Me</g-link>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>

.layout {
  width:100%;
  flex-grow:1;
  
  display:flex;
  flex-direction: column;
  align-items: center;
}

header {
  align-self:flex-start;
  margin-bottom: calc(var(--spacer) * 3);
}
footer {
  align-self:flex-end;
  margin-top: calc(var(--spacer) * 2);
}
header, footer {
  padding: calc(var(--spacer)*2);

  border-style:solid;
  border-width:1px;

  background: var(--light-grey);
}
@media (orientation:portrait) {
  header, footer {
    align-self:stretch;
  }
}

nav ul {
  margin: 0;
}
nav li {
  display:inline-block;
  font-size: 100%;
}
nav li:before {
  content: "~";
  margin: 0;
  margin-right: var(--spacer);
  margin-left: calc(var(--spacer)*2)
}
nav li:first-child::before {
  margin-left: 0;
}

content {
  width:90vw;
  flex-grow:1;

  display:flex;
  flex-direction: column;
  align-items: center;

  * {
    margin: var(--spacer) 0;
    text-align: center;
  }
  img {
    max-height: 70vh;
    max-width:100%;
    width:auto;
    margin: var(--spacer) 0;
  }
  hr {
    width:100%;
  }
  li {
    margin: var(--spacer) 0;
  }
}
</style>