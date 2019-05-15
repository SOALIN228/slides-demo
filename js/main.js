let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
bindEvents()

// 上一张和下一张
$(next).on('click', function () {
  goToSlide(current + 1)
})
$(previous).on('click', function () {
  goToSlide(current - 1)
})

// 自动轮播
let timer = setInterval(function () {
  goToSlide(current + 1)
}, 2000)

// 鼠标悬停暂停，移除鼠标继续
$('.window').on('mouseenter', function () {
  window.clearInterval(timer)
}).on('mouseleave', function () {
  timer = setInterval(function () {
    goToSlide(current + 1)
  }, 2000)
})

// 点击跳转
function bindEvents () {
  $('#buttonWrapper').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
  })
}

// 切换图片
function goToSlide (index) {
  if (index > $buttons.length - 1) {
    index = 0
  } else if (index < 0) {
    index = $buttons.length - 1
  }

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
}

// 添加第一张图片和最后一张图片
function makeFakeSlides () {
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length - 1).clone(true)

  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}
