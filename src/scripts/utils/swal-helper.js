import Swal from 'sweetalert2';

const sweetAlert = {
  successMessage(text, callbck) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text,
    }).then(callbck);
  },

  errorMessage(text) {
    Swal.fire({
      icon: 'error',
      title: 'Failed',
      text,
    });
  },

  warnigMessage(text) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text,
    });
  },
};

export default sweetAlert;
