let n
init()
setInterval(() => {
  makeLeave(getImage(n))
  .one('transitionend', (e) => {
    makeEnter($(e.currentTarget))
  })
  makeCurrent(getImage(n + 1))
  n += 1
}, 3000)


function x (n) {
  if (n > 5) {
    n = n % 5
    if (n === 0) {
      n = 5
    }
  } // n = 1 2 3 4 5
  return n
}

function init () {
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
  .siblings().addClass('enter')
}

function getImage (n) {
  return $(`.images > img:nth-child(${x(n)})`)
}

function makeCurrent ($node) {
  return $node.removeClass('enter leave').addClass('current')
}

function makeLeave ($node) {
  return $node.removeClass('enter current').addClass('leave')
}

function makeEnter ($node) {
  return $node.removeClass('leave current').addClass('enter')
}
