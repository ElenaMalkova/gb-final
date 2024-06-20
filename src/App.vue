<template>
  <div class="content">
    <nav class="top-menu">
      <div class="nav-bar center">
        <div class="logo">
          <router-link :to="{ name: 'home' }">
            <img src="@/assets/img/logo.svg" alt="Лого котодома" class="logotype">
          </router-link>
        </div>
        <ul class="navigation">
          <router-link :to="{ name: 'cats' }" class="navigation-item">
            <li id="our-pets">
              НАШИ ПИТОМЦЫ
            </li>
          </router-link>
          <router-link :to="{ name: 'support' }" class="navigation-item">
            <li id="support-us">
              ПОМОЧЬ КОТОДОМУ
            </li>
          </router-link>
          <router-link :to="{ name: 'news' }" class="navigation-item">
            <li id="news">
              НОВОСТИ
            </li>
          </router-link>
          <router-link :to="{ name: 'helpful' }" class="navigation-item">
            <li id="helpful">
              ПОЛЕЗНОЕ
            </li>
          </router-link>
          <router-link :to="{ name: 'contacts' }" class="navigation-item">
            <li id="contacts">
              КОНТАКТЫ
            </li>
          </router-link>
        </ul>
      </div>

    </nav>
    <router-view/>
  </div>

  <footer class="center footer">
    <div class="footer__item">
      <p class="footer__item-text">It is a long established fact that a reader will be distracted lookings.</p>
      <div class="footer__logos">
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M16.6367 4.32617C16.6367 4.50195 16.6367 4.64258 16.6367 4.81836C16.6367 9.70508 12.9453 15.2949 6.16016 15.2949C4.05078 15.2949 2.11719 14.6973 0.5 13.6426C0.78125 13.6777 1.0625 13.7129 1.37891 13.7129C3.10156 13.7129 4.68359 13.1152 5.94922 12.1309C4.33203 12.0957 2.96094 11.041 2.50391 9.56445C2.75 9.59961 2.96094 9.63477 3.20703 9.63477C3.52344 9.63477 3.875 9.56445 4.15625 9.49414C2.46875 9.14258 1.20312 7.66602 1.20312 5.87305V5.83789C1.69531 6.11914 2.29297 6.25977 2.89062 6.29492C1.87109 5.62695 1.23828 4.50195 1.23828 3.23633C1.23828 2.5332 1.41406 1.90039 1.73047 1.37305C3.55859 3.58789 6.30078 5.06445 9.35938 5.24023C9.28906 4.95898 9.25391 4.67773 9.25391 4.39648C9.25391 2.35742 10.9062 0.705078 12.9453 0.705078C14 0.705078 14.9492 1.12695 15.6523 1.86523C16.4609 1.68945 17.2695 1.37305 17.9727 0.951172C17.6914 1.83008 17.1289 2.5332 16.3555 2.99023C17.0938 2.91992 17.832 2.70898 18.4648 2.42773C17.9727 3.16602 17.3398 3.79883 16.6367 4.32617Z"
              fill="#292F36"/>
        </svg>
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M3.98047 15.7148V5.20312H0.710938V15.7148H3.98047ZM2.32812 3.79688C3.38281 3.79688 4.22656 2.91797 4.22656 1.86328C4.22656 0.84375 3.38281 0 2.32812 0C1.30859 0 0.464844 0.84375 0.464844 1.86328C0.464844 2.91797 1.30859 3.79688 2.32812 3.79688ZM16.1797 15.7148H16.2148V9.94922C16.2148 7.13672 15.582 4.95703 12.2773 4.95703C10.6953 4.95703 9.64062 5.83594 9.18359 6.64453H9.14844V5.20312H6.01953V15.7148H9.28906V10.5117C9.28906 9.14062 9.53516 7.83984 11.2227 7.83984C12.9102 7.83984 12.9453 9.38672 12.9453 10.6172V15.7148H16.1797Z"
              fill="#292F36"/>
        </svg>
      </div>
    </div>
    <div class="footer__item">
      <h3 class="footer__heading">Pages</h3>
      <ul class="footer__links-list">
        <li class="footer__list-item"><a href="#">Home</a></li>
        <li class="footer__list-item"><a href="#">Project</a></li>
        <li class="footer__list-item"><a href="#">Blog</a></li>
      </ul>
    </div>
    <div class="footer__item">
      <h3 class="footer__heading">Contacts</h3>
      <ul class="footer__links-list">
        <li class="footer__list-item">55 East Birchwood Ave. Brooklyn, New York 11201</li>
        <li class="footer__list-item"><a href="#">contact@interno.com</a></li>
        <li class="footer__list-item"><a href="#">+0 123 456–78—90</a></li>
      </ul>
    </div>

  </footer>
</template>

<style lang="sass">
template
  display: flex !important

</style>
<script>

</script>