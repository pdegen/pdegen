import * as bootstrap from 'bootstrap'

export function navbarHandler() {
  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler') as HTMLElement | null
  const responsiveNavItems = Array.from(
    document.querySelectorAll('#navbarResponsive .nav-link'),
  ) as HTMLElement[]
  if (navbarToggler == null) return
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })
}

// Custom methods

export function progressbarHandler(section_name: string) {
  const progressBars = document.querySelectorAll<HTMLElement>('.progress-bar')

  function animateBars() {
    progressBars.forEach((bar) => {
      const value = bar.getAttribute('data-value')
      if (bar.getAttribute('data-animated')) return

      bar.style.width = value + '%'
      bar.textContent = value + '%'
      bar.setAttribute('data-animated', 'true')
    })
  }

  // Detect when the section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBars()
        }
      })
    },
    { threshold: 0.5 },
  )

  const section = document.querySelector(section_name)
  if (section) {
    observer.observe(section)
  }
}
