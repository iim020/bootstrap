import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

//툴팁초기화
const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})
//모달 초기화
new bootstrap.Modal(document.querySelector('#exampleModal'), {
   backdrop: 'static'
})
//팝업 창에서 밖에 누르면 창 안내려지는거 안됌 