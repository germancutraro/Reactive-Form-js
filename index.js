((c, d) => {
  const form = d.forms[0],
    inputs = d.querySelectorAll('[required]')
  c(inputs)
  form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Form sent!')
  })
  inputs.forEach(input => {
    let span = d.createElement('span')
    span.id = input.name
    input.insertAdjacentElement('afterend', span)
    input.addEventListener('keyup', e => {
      if (input.pattern) {
        let regex = new RegExp(input.pattern)
        return (!regex.exec(input.value))
          ? d.querySelector(`#${input.name}`).textContent = `Invalid format, write ${input.title}`
          : d.querySelector(`#${input.name}`).textContent = null
      } else {
        return (!input.value)
          ? d.querySelector(`#${input.name}`).textContent = `${input.title} is required`
          : d.querySelector(`#${input.name}`).textContent = null
      }
    })
  })
})(console.log, document);
