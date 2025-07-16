  const inputs = document.querySelectorAll('.otp-input input');
       const timerDisplay = document.getElementById('timer');
       const resendLink = document.querySelector('.resend-link');
       // const emailSpan = document.getElementById('email');
       let timeLeft = 120; // 2 minutes in seconds
       let timerId;
       let canResend = true;
    
       inputs.forEach((input, index) => {
           input.addEventListener('input', (e) => {
               if (e.target.value.length > 1) {
                   e.target.value = e.target.value.slice(0, 1);
               }
               if (e.target.value.length === 1) {
                   if (index < inputs.length - 1) {
                       inputs[index + 1].focus();
                   }
               }
           });
    
           input.addEventListener('keydown', (e) => {
               if (e.key === 'Backspace' && !e.target.value) {
                   if (index > 0) {
                       inputs[index - 1].focus();
                   }
               }
               if (e.key === 'e') {
                   e.preventDefault();
               }
           });
       });


   $(document).ready(function() {
       // When clicking the next button in step2
       $('#next-step_first').click(function() {
          var financingType = $('#financing_type').val();
    
          if (financingType === 'تمويل عقاري') {
             $('#the_next').click(function() { 
             $('#step3').addClass('active'); 
             $('#step3').show(); 
               });
              $('#the_next_submit').hide(); 
              $('.the_next_second').show();
          } else {
             $('#step3').removeClass('active');
             $('#step3').hide(); 
             $('#the_next_submit').show(); 
             $('.the_next_second').hide();
          }
       });
    });      






  $(document).ready(function () {
               // Initialize the datepicker with Arabic language for 'dob'
               $('#dob').datepicker({
                  format: 'dd/mm/yyyy',   // Customize the format as needed
                  language: 'ar',         // Set the language to Arabic
                  autoclose: true,        // Close the picker after selecting a date
                  todayHighlight: true,   // Highlight today's date
                  orientation: 'bottom',  // Ensure the datepicker appears below the input
                  container: 'body',      // Attach the datepicker to the body to avoid overflow issues
               });
            
               // Initialize the datepicker with Arabic language for 'appointment_date'
               $('#appointment_date').datepicker({
                  format: 'dd/mm/yyyy',   // Customize the format as needed
                  language: 'ar',         // Set the language to Arabic
                  autoclose: true,        // Close the picker after selecting a date
                  todayHighlight: true,   // Highlight today's date
                  orientation: 'bottom',  // Ensure the datepicker appears below the input
                  container: 'body',      // Attach the datepicker to the body to avoid overflow issues
               });
            });
            
            
            $(document).ready(function () {
             $('.nav-tabs > li a[title]').tooltip();
            
             // Wizard navigation
             $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                 var target = $(e.target);
                 if (target.parent().hasClass('disabled')) {
                     return false;
                 }
             });
            
             // Next Step Button Click Handler
             $(".next-step").click(function (e) {
                 const currentStepId = $(this).closest('.tab-pane').attr('id');
                 
                 if (currentStepId === 'step1') {
                     // Step 1 Validation
                       const financingType = $('#financing_type').val().trim();
                       const fullname = $('#full_name').val().trim();
                       const mobile = $('#mobile').val().trim();
                       const varifed_mobile = $('#varifed_mobile').val().trim();
                       const idnumber = $('#id_number').val().trim();
                       const selected_option = $('#selected_option').val().trim();
                       const bankdetail = $('#bankdetail').val().trim();
                       if (!financingType) {
                           alert('يرجى تحديد نوع التمويل قبل المتابعة إلى الخطوة التالية.');
                           return false; // Prevent navigation to the next step
                       }
                        if (!fullname) {
                           alert('الرجاء إدخال اسمك الكامل قبل الانتقال إلى الخطوة التالية.');
                           return false; // Prevent navigation to the next step
                       } 
                       if (!mobile) {
                           alert('الرجاء إدخال رقم الهاتف المحمول قبل الانتقال إلى الخطوة التالية.');
                           return false; // Prevent navigation to the next step
                       }
                       // if (!varifed_mobile) {
                       //     alert('يرجى التحقق من رقم هاتفك المحمول قبل الانتقال إلى الخطوة التالية.');
                       //     return false; // Prevent navigation to the next step
                       // }
                       if (!idnumber) {
                           alert('يرجى إدخال رقم الهوية الخاص بك قبل الانتقال إلى الخطوة التالية.');
                           return false; // Prevent navigation to the next step
                       }
                        if (!selected_option) {
                           alert('يرجى تحديد صاحب العمل قبل الانتقال إلى الخطوة التالية.');
                           return false; // Prevent navigation to the next step
                       } 
                       if (!bankdetail) {
                           alert('الرجاء تحديد البنك الخاص بك قبل الانتقال إلى الخطوة التالية.');
                           return false; // Prevent navigation to the next step
                       }
                 } else if (currentStepId === 'step2') {
                     // Step 2 Validation
                     const dob = $('#dob').val().trim();
                     const appointmentDate = $('#appointment_date').val().trim();
                     const obligation = $('select[name="obligation"]').val();
                     const noOfYears = $('input[name="no_of_year_financing"]').val();
                     const fileInput = $('#fileInput').val();
            
                     if (!dob) {
                         alert('يرجى إدخال تاريخ الميلاد قبل المتابعة.');
                         return false;
                     }
                     if (!appointmentDate) {
                         alert('يرجى إدخال تاريخ التعين قبل المتابعة.');
                         return false;
                     }
                     if (!obligation) {
                         alert('يرجى تحديد الالتزامات قبل المتابعة.');
                         return false;
                     }
                     if (!noOfYears || noOfYears === "0") {
                         alert('يرجى تحديد عدد سنوات التمويل قبل المتابعة.');
                         return false;
                     }
                     if (!fileInput) {
                         alert('يرجى إرفاق صورة تعريف الراتب قبل المتابعة.');
                         return false;
                     }
                 }
                 else if (currentStepId === 'step3') {
                     // Step 2 Validation
                     const housing_support = $('#housing_support').val();
                     const real_estate_financing = $('#type_of_real_estate_financing').val();
            
                     if (!housing_support) {
                         alert('يرجى تحديد الدعم المنزلي قبل المتابعة.');
                         return false;
                     }
                     if (!real_estate_financing) {
                         alert('يرجى تحديد نوع التمويل العقاري قبل المتابعة.');
                         return false;
                     }
                 }
            
                 // Proceed to the next step
                 const active = $('.wizard .nav-tabs li.active');
                 active.next().removeClass('disabled');
                 nextTab(active);
             });
            
             // Previous Step Button Click Handler
             $(".prev-step").click(function (e) {
                 const active = $('.wizard .nav-tabs li.active');
                 prevTab(active);
             });
            });
            
            // Function to navigate to the next tab
            function nextTab(elem) {
             $(elem).next().find('a[data-toggle="tab"]').click();
            }
            
            // Function to navigate to the previous tab
            function prevTab(elem) {
             $(elem).prev().find('a[data-toggle="tab"]').click();
            }
            
            // Handle tab navigation active state
            $('.nav-tabs').on('click', 'li', function () {
             $('.nav-tabs li.active').removeClass('active');
             $(this).addClass('active');
            });
            


     document.getElementById('fileSelectButton').addEventListener('click', function() {
               document.getElementById('fileInput').click(); 
            });
            
            const sliderInput = document.querySelector(".input-slider");
            const numberLabel = document.querySelector(".number--label");
            const sliderContainer = document.querySelector(".slider-container");
            
            sliderInput.addEventListener("input", () => {
            const { value, min, max, offsetWidth } = sliderInput;
            const percent = ((value - min) / (max - min)) * 100; // Calculate percentage
            const newPosition = (percent / 100) * offsetWidth;   // Map percentage to pixel position
            
            // Dynamically position the label
            numberLabel.style.transform = `translateX(-${newPosition}px)`;
            numberLabel.style.right = "-4px"; // Set right to -1px
            numberLabel.textContent = value; // Update label with the current value
            sliderContainer.style.background = `linear-gradient(to left, #0500e2 ${percent}%, white ${percent}%)`;
            });
            
       
       

           // Close the dropdown when an item is selected
            $('#dropdownMenuButton1').on('click', function () {
                // Get the selected option value
                var selectedValue = $(this).text().trim();
            
                // Close the dropdown menu when an option is clicked
                $('.dropdown-menu').on('click', '.dropdown-item', function () {
                    var selectedText = $(this).text().trim();
                    $('#selected_option').val($(this).data('value')); // Set the hidden input value
                    $('#dropdownMenuButton1').text(selectedText); // Update the button text
                    $('.dropdown-menu').removeClass('show'); // Hide the dropdown
                });
            });      









         // Update hidden input field with selected value from dropdown
            document.querySelectorAll('.dropdown-item').forEach(function (element) {
              element.addEventListener('click', function (e) {
                e.preventDefault();
                let selectedValue = this.getAttribute('data-value');
                document.querySelector('#selected_option').value = selectedValue;
            
                // Update dropdown button text to selected option
                let selectedText = this.innerText;
                document.querySelector('#dropdownMenuButton1').innerText = selectedText;
              });
            });
            
            // Function to toggle submenu visibility
            function toggleSubMenu(e) {
              e.stopPropagation();
              const submenu = e.target.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('show');
              }
            }
            
            // Attach click event to toggle submenus when dropdown-toggle items are clicked
            document.querySelectorAll('.dropdown-submenu > .dropdown-item').forEach(function (element) {
              element.addEventListener('click', toggleSubMenu);
            });
            
            // Close all submenus when clicking outside the dropdown
            document.addEventListener('click', function(e) {
              if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (submenu) {
                  submenu.classList.remove('show');
                });
              }
            });
            
            // Prevent dropdown from closing when clicking on a dropdown item
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
              menu.addEventListener('click', function (e) {
                e.stopPropagation();
              });
            });
            




   document.getElementById('financing_type').addEventListener('change', function() {
               const selectedOption = this.value;
               const slider = document.getElementById('input-slider');
               const sliderContainer = document.getElementById('slider-container');
               // const typeofrealestatefinancing = document.getElementById('typeofrealestatefinancing');
               
               if (selectedOption === 'تمويل عقاري') {
                  slider.min = 0;
                  slider.max = 25;
                  slider.value = 0; // Reset slider value
                  sliderContainer.style.display = 'block'; // Show slider
               } else {
            
                  slider.min = 0;
                  slider.max = 5;
                  slider.value = 0; // Reset slider value
                  sliderContainer.style.display = 'block'; // Show slider
               }
            
               // If no option is selected (default), hide the slider
               if (!selectedOption || selectedOption === 'ادخل نوع التمويل هنا') {
                  sliderContainer.style.display = 'none'; // Hide slider
               }
            });    
            


   $(document).ready(function () {
             $('#mobile').on('input', function () {
                     const mobileNumber = $(this).val().trim();
                     
                     // Limit the input to 9 digits
                     if (mobileNumber.length > 9) {
                         $(this).val(mobileNumber.substring(0, 9));
                     }
            
                     // Show/hide the verify button based on input length
                     if (mobileNumber.length === 9) {
                         $('#verify_mobile_btn').show();
                     } else {
                         $('#verify_mobile_btn').hide();
                     }
                 });
            
             // Handle "Verify Mobile Number" button click
             $('#verify_mobile_btn').on('click', function () {
                 const mobileNumber = $('#mobile').val().trim();
                 if (mobileNumber) {
                     $.ajax({
                         url: 'site/verifyMobile', // Update with your base URL if needed
                         method: 'POST',
                         data: { mobile: mobileNumber },
                         success: function (response) {
                             const res = JSON.parse(response);
                             if (res.success) {
                                 $('#otpModal').modal('show');
                             } else {
                                 alert(res.message || 'فشل التحقق من رقم الهاتف المحمول.');
                             }
                         },
                         error: function () {
                             alert('حدث خطأ. يرجى المحاولة مرة أخرى.');
                         },
                     });
                 }
             });
            
             // Handle OTP form submission
            $('#otpForm').on('submit', function (e) {
                 e.preventDefault();
                 
                 // Get OTP values from input fields
                 const otp = Array.from($('.otp-input input')).map(input => input.value).join('');
                 const mobile = $('#mobile').val().trim();
                 // Check if OTP is 6 digits long
                  // const otp = Array.from(inputs).map(input => input.value).join('');
                    if (otp.length !== 6) {
                        alert('Please enter a 6-digit OTP'); 
                        return false;
                    } 
                 
                 // If OTP is valid, proceed with AJAX call
                 $.ajax({
                     url: 'site/verifyOtp',  // Update with your actual URL
                     method: 'POST',
                     data: { otp,mobile },
                     success: function (response) {
                         const res = JSON.parse(response);
                         if (res.success) {
                             alert('تم التحقق من OTP بنجاح!');
                             $('#otpModal').modal('hide');
                             $('#otp').val('');
                             $('#verify_mobile_btn').hide();
                             $('#otpError').hide();
                             $('#varifed_mobile').val('verified');
                         } else {
                             $('#otpError').text(res.message || 'OTP غير صالح.').show();
                             $('#otp').val('');
                             setTimeout(function() {
                                 $('#otpError').hide();  // Hide the error message after 3 seconds
                             }, 3000);
                         }
                     },
                     error: function () {
                         $('#otpError').text('حدث خطأ. يرجى المحاولة مرة أخرى.').show();
                     }
                 });
             });
            });                                    