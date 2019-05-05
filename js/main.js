let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({ transform: 'translateX(-400px)' })
bindEvents()

function bindEvents () {
  $('#buttonWrapper').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let index = $button.index()
    if (current === $buttons.length - 1 && index === 0) {
      // 从最后一张到第一张
      $slides.css({ transform: `translateX(${-($buttons.length + 1) * 400}px)` })
      .one('transitionend', function () {
        $slides.hide().offset()
        $slides.css({ transform: `translateX(${-(index + 1) * 400}px)` }).show()
      })
    } else if (current === 0 && index === $buttons.length - 1) {
      // 从第一张到最后一张
      $slides.css({ transform: `translateX(0px)` })
      .one('transitionend', function () {
        $slides.hide().offset()
        $slides.css({ transform: `translateX(${-(index + 1) * 400}px)` }).show()
      })
    } else {
      $slides.css({ transform: `translateX(${-(index + 1) * 400}px)` })
    }
    current = index
  })
}

function makeFakeSlides () {
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length - 1).clone(true)

  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}
