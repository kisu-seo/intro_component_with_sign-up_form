/**
 * 회원가입 폼 유효성 검사
 * - 제출 시 빈 필드 → .field-group에 .error 추가 → data-error-empty 메시지 노출
 * - 이메일은 빈값 + 형식 이중 검사, 형식 오류 시 data-error-format 메시지 노출
 * - 스타일은 CSS(.field-group.error)가 담당하므로 JS는 클래스 추가/제거만 수행
 */
(function () {
  var form = document.getElementById('signupForm');
  if (!form) return;

  /**
   * 이메일 문자열이 "로컬@도메인.최상위" 형식인지 검사
   * @param {string} value - 검사할 이메일 문자열
   * @returns {boolean} 형식이 맞으면 true
   * @description 정규식 의미: 앞쪽에 공백·@ 없이 1자 이상 → @ 1개 → 공백·@ 없이 1자 이상 → . 1개 → 공백·@ 없이 1자 이상으로 끝
   *   (즉, @ 포함·@ 앞뒤에 문자 존재·점(.)으로 구분된 도메인 부분 존재 여부 검증)
   */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var groups = form.querySelectorAll('.field-group');
    var hasError = false;

    groups.forEach(function (group) {
      /* 1) 이번 제출에서 사용할 수 있도록 기존 에러 상태와 메시지 초기화 */
      group.classList.remove('error');
      var input = group.querySelector('.input-field');
      var msgEl = group.querySelector('.error-msg');
      if (!input || !msgEl) return;

      var value = (input.value || '').trim();
      var name = (input.getAttribute('name') || '').toLowerCase();
      var isEmpty = value === '';
      var emptyMessage = group.getAttribute('data-error-empty') || 'This field cannot be empty';
      var formatMessage = group.getAttribute('data-error-format') || 'Looks like this is not an email';

      var showError = false;
      var message = '';

      /* 2) 이메일 필드는 빈값 검사 후, 값이 있으면 형식 검사까지 수행 */
      if (name === 'email') {
        if (isEmpty) {
          showError = true;
          message = emptyMessage;
        } else if (!isValidEmail(value)) {
          showError = true;
          message = formatMessage;
        }
      } else {
        if (isEmpty) {
          showError = true;
          message = emptyMessage;
        }
      }

      /* 3) 유효성 실패 시 .error 추가 + 메시지 텍스트 설정 → CSS에 의해 테두리·아이콘·메시지 노출 */
      if (showError) {
        hasError = true;
        group.classList.add('error');
        msgEl.textContent = message;
      } else {
        msgEl.textContent = '';
      }
    });

    /* 4) 한 건이라도 에러가 있으면 제출 중단, 전부 통과 시에만 form.submit() 호출 */
    if (!hasError) {
      form.submit();
    }
  });
})();
