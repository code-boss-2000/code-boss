$(document).ready(function(){
	$("#cancel").click(function(){   
      $("#output").empty();
      $("#messages").empty();
  });
});

  
$(document).ready(function(){
  $("#createcourse").click(function(){ 	
    $.ajax({
    	url: "ajax/form_create_course.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	}) 
  }); 
  
  	
 
  $("#cn_form").click(function(){ 	
  	$("#messages").html('<br><br><img src="../img/loading.gif" width="30"><br>');	
    $.ajax({
    	url: "ajax/form_create_new_form.php", 
    	success: function(result){
    	  $("#messages").empty();
	      $("#output").html(result);
	      
	    }
  	})  
  });
  
    $("#cn_q").click(function(){ 	
  	$("#messages").html('<br><br><img src="../img/loading.gif" width="30"><br>');	
    $.ajax({
    	url: "ajax/form_create_new_question.php", 
    	success: function(result){
    	  $("#messages").empty();
	      $("#output").html(result);
	      
	    }
  	})  
  });
  
$("#cn_rie").click(function(){ 	
  	$("#messages").html('<br><br><img src="../img/loading.gif" width="30"><br>');	
    $.ajax({
    	url: "ajax/form_create_rie.php", 
    	success: function(result){
    	  $("#messages").empty();
	      $("#output").html(result);
	      
	    }
  	})  
  });
  


  $("#new_changelog_form").click(function(){ 	
    $.ajax({
    	url: "ajax/form_create_changelog.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	})  
  });
  
  $("#createcertificate").click(function(){ 	
    $.ajax({
    	url: "ajax/form_create_certificate.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	})  
  });
  
  $("#create_eml_tpl").click(function(){ 	
    $.ajax({
    	url: "ajax/form_create_eml_tpl.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	})  
  });
  

  
  $("#createuser").click(function(){ 	
  	$("#messages").empty();
    $.ajax({
    	url: "ajax/form_create_user.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	})  
  });
  
  $("#createcompany").click(function(){ 	
    $.ajax({
    	url: "ajax/form_create_company.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	})  
  });

 $("#send_reminder_emails").click(function(){ 
 	$("#output").html('<br><br><img src="../img/loading.gif" width="50"><br>');	
    $.ajax({
    	url: "ajax/act_send_reminder_emails.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	})  
  });


  $("#schedulecourse").click(function(){ 
  	$("#messages").empty();	
    $.ajax({
    	url: "ajax/form_schedule_course.php", 
    	success: function(result){
     	  $("#output").html(result);
     	  
    	}
  	}) 
  });
  
});

$(document).ready(function(){
	$(document).on('click', '.btn_delete_course',function(){
	  	var id=$(this).data("id3");
	  	if(confirm("Are you sure wou want to delete this course? This can NOT be made undone."))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_course.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(data){
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
	  });
});

$(document).on('click', '.btn_delete_form',function(){
	  	var id=$(this).data("id3");
	  	if(confirm("Are you sure wou want to delete this form? This can NOT be made undone."))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_form.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			} 				
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  		
	  	}
});


$(document).ready(function(){
	$(document).on('click', '.btn_act_staffmember',function(){
	  	var id=$(this).data("id4");
	  		$(this).empty();
	  		$.ajax({
	  			url:"ajax/act_update_staffmember_status.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				var data = JSON.parse(result);
	  				$("#output").html(data.part1);
	  			} 			
	  		})

	  });
});


$(document).ready(function(){
	$(document).on('click', '.btn_delete_company',function(){
	  	var id=$(this).data("id3");  
	  		$.ajax({
	  			url:"ajax/act_delete_company.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});  
	  });
});

$(document).ready(function(){
	$(document).on('change', '#def_cert',function(){
		var form_data = $('#f2').serialize();
  
	  		$.ajax({
	  			url:"ajax/get_def_cert_period.php",
	  			method:"POST",
	  			data: form_data,
	  			dataType:"text",
	  			success:function(data){
	  				$("#def_cert_period").val(data);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_delete_certificate',function(){
	  	var id=$(this).data("id4");
	  	if(confirm("Are you sure wou want to delete this certificate template? This can NOT be made undone."))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_certificate.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(data){
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_delete_user',function(){
	  	var id=$(this).data("id3");
	  	if(confirm("Are you sure wou want to delete this user. This can NOT be made undone."))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_user.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").html(result);
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_delete_scheduledcourse',function(){
	  	var id=$(this).data("id3");
	  	
	  	if(confirm("Are you sure wou want to delete this course? This can NOT be made undone."))
	  	{
	  		$("#output").empty();
	  		$.ajax({
	  			url:"ajax/act_delete_scheduledcourse.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").html(result);
	  				
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
	  });
});



$(document).ready(function(){
	$(document).on('click', '.btn_edit_course',function(){
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_edit_course.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_edit_staffmember',function(){
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_edit_staffmember.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});



$(document).ready(function(){
	$(document).on('click', '.btn_edit_user',function(){
		$("#messages").empty();
		$(this).closest('tr').find('.edit_class').append('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">');
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_edit_user.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$('.edit_class').empty();
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_edit_department',function(){
		$(this).closest('tr').find('.edit_class').append('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">');
	
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_edit_department.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$('.edit_class').empty();
	  				$("#department_details").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_show_poc_data',function(){
		$(this).closest('tr').find('.edit_class').append('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">');
	
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/get_poc.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$('.edit_class').empty();
	  				$("#department_data").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_del_department',function(){
	  	var id=$(this).data("id5");  
	  		$.ajax({
	  			url:"ajax/form_edit_company.php",
	  			method:"POST",
	  			data:{id_dep:id},
	  			dataType:"text",
	  			success:function(result){
	  				
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#create_department',function(){
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_create_department.php",
	  			method:"POST",
	  			data:{companycode:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").empty();
	  				$("#department_details").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_edit_scheduledcourse',function(){
		$("#messages").empty();
	  	var id=$(this).data("id2");  
	  	$(this).closest('tr').find('.edit_class').html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">');
	
	  		$.ajax({
	  			url:"ajax/form_edit_scheduledcourse.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  				$('.edit_class').empty();
	  				
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_edit_scheduledcourse_1',function(){
		$("#messages").empty();
		$("#messages").html('<div class="alert alert-success" role="alert" style="padding-left: 15px;"><img src="<?php echo ''.get_setting_value('IMG_ROOT').'loading.gif" width="25"> Course <span data-id2="'.$_REQUEST['sc_id'].'" class="btn_edit_scheduledcourse_1" style="font-weight: bold;">'.$_REQUEST['sc_id'].'</span> has been scheduled. Click the number to edit the course details. <button type="button" class="close" data-dismiss="alert"  aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';?>');
			var id=$(this).data("id2");
	  		$.ajax({
	  			url:"ajax/form_edit_scheduledcourse.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				
	  				$("#output").html(result);
	  				$('.edit_class').empty();
	  				$("#messages").empty();
	  				
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#refresh_form_edit_scheduledcourse',function(){
	  	var id=$(this).data("id5"); 
	  	$("#refresh_1").html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">'); 
	  		$.ajax({
	  			url:"ajax/form_edit_scheduledcourse.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").empty();
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});




$(document).on('click', '.btn_edit_company',function(){
	$(this).closest('tr').find('.edit_class').append('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">');
	  	
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_edit_company.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").empty();
	  				$("#output").html(result);
	  				$(".edit_class").empty();
	  			}
	  		})
	  		$.ajax({
	  			url:"ajax/get_company_course_participants.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output2").html(result);
	  			}
	  		})	  	  
});


$(document).ready(function(){
	$(document).on('click', '.btn_edit_certificate',function(){
	  	var id=$(this).data("id4");
	  	
	  
	  		$.ajax({
	  			url:"ajax/form_edit_certificate.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").empty();
	  				$("#output").html(result);
	  			}		
	  		})  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_del_certificate',function(){
	  	var id=$(this).data("id4");
	  	if(confirm("Are you sure wou want to delete this certificate? This can NOT be made undone."))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_issued_certificate.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(data){
	  			} 			
	  		})
	  		$("#messages").html('<div class="alert alert-success" role="alert" style="padding-left: 15px;">The certificate has been deleted.<button type="button" class="close" data-dismiss="alert"  aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
	  });
});


$(document).ready(function(){
	$(document).on('click', '#cn_dpt',function(){
		var form_data = $('#f2').serialize();
	  		$.ajax({
	  			url: 'ajax/act_create_new_department.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").empty();
	  				$("#messages").html(result);
	  				}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#update_dpt',function(){
		var form_data = $('#f2').serialize();
	  		$.ajax({
	  			url: 'ajax/form_edit_company.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#update_company',function(){
		var form_data = $('#f2').serialize();
	  		$.ajax({
	  			url: 'ajax/form_edit_company.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").empty();
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).on('click', '#act_cn_form',function(){
		var form_data = $('#qn_form').serialize();
	  		$.ajax({
	  			url: 'ajax/act_create_new_form.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").empty();
	  				$("#output").html(result);
	  			}
	  		})	  
});

  

$(document).ready(function(){
	$(document).on('click', '#update_user',function(){
		$("#update_user").empty();
		$("#update_user").removeClass("linkbutton");
		$("#messages").empty();
		$("#update_user").html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="30">');
		var form_data = $('#f2').serialize();
	  		$.ajax({
	  			url: 'ajax/form_edit_user.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){	  				
	  				$("#output").html(result);
	  				$("#update_user").show();
	  				$("#messages").empty();
	  			}
	  		})	  
	  });
});




$(document).ready(function(){
	$(document).on('click', '#cn_course_template',function(){
		var form_data = $('#f2').serialize();
	  		$.ajax({
	  			url: 'ajax/act_create_new_course.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.update_scheduled_course',function(){
		$("#messages").empty();
		$(".btns_forms_1").empty();
		$(".btns_forms_1").append('<img src="../img/loading.gif" width="30">');	
		var form_data = $('#f6').serialize();
	  		$.ajax({
	  			url: 'ajax/act_update_scheduled_course.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").html(result);
	  				$(".btns_forms_1").empty();
	  			}
	  		})	  
	  });
});




$(document).ready(function(){
	$(document).on('click', '#btn_notify_pocs',function(){
		$(".update_scheduled_course").hide();
		$("#notify_pocs_output").html('<img src="../img/loading.gif" width="30"><br>');
		$("#div_notify").html('<img src="../img/loading.gif" width="30"><br>');
		var form_data = $('#f6').serialize();
	  		$.ajax({
	  			url: 'ajax/act_notify_pocs.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#notify_pocs_output").html(result);
	  				$("#div_notify").empty();
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_edit_eml_tpl',function(){
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_edit_eml_tpl.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#update_eml_tpl',function(){
		var form_data = $('#u_eml_tpl').serialize();
	  		$.ajax({
	  			url: 'ajax/act_update_eml_tpl.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#btn_generate_certificates',function(){
		var form_data = $('#f6').serialize();
		if(confirm("Did you save any changes just made to the course. Make sure you have saved the changes BEFORE generating the certificates.")){
		    $.ajax({
		    	url: "ajax/act_generate_course_certificates.php", 
		    	method:"POST",
		    	data: form_data,
		    	success: function(result){
			      $("#cert_output").html(result);
		    	}
		    }) 
	 	}
  	
  }); 
});

$(document).ready(function(){
	$(document).on('click', '.btn_delete_eml_tpl',function(){
	  	var id=$(this).data("id3");
	  	if(confirm("Are you sure wou want to delete this Email Template? This can NOT be made undone."))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_eml_tpl.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").html(result);
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
	  });
});


$(document).ready(function(){
	$(document).on('click', '.btn_del_usr_dept_relationship',function(){
	  	var id=$(this).data("id2");
	  	$("#messages").empty();
	  	//if(confirm("Are you sure?"))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_usr_dept_rel.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				
	  				$("#messages").html(result);
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
	  });
});

$(document).ready(function(){
	$(document).on('click', '#create_sc',function(){
		$("#messages").empty();
	  	var form_data = $('#f5').serialize();
	  	
	  		$.ajax({
	  			url:"ajax/act_create_scheduled_course.php",
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").html(result);
	  				$("#output").empty();
	  				
	  			} 			
	  		})
	  		
	  	
	  });
});

$(document).ready(function(){
	$(document).on('click', '#create_new_user',function(){
		$("#messages").html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="50"><br>');
		$("#user_table").html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="50"> Table is being refreshed.');
		var form_data = $('#f2').serialize();
		$("#output").empty();
	  		$.ajax({
	  			url: 'ajax/act_create_new_user.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").html(result);
	  				$("#user_table").load('ajax/get_users_overview.php');
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#show_new_staffmember_form',function(){
		$("#output").empty();
	  		$.ajax({
	  			url: 'ajax/form_create_staffmember.php', 
	  			success:function(result){
	  				$("#output").html(result);

	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#cn_staff_rating',function(){
	  		var form_data = $('#form_cn_staffrating').serialize();
	  		$.ajax({
	  			url: 'ajax/form_create_staffrating.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#btn_update_staff_rating',function(){
	  		var form_data = $('#form_edit_staffrating').serialize();
	  		$.ajax({
	  			url: 'ajax/form_edit_staffrating.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
	  });
});

$(document).on('click', '#update_staff_member',function(){
	  	var form_data = $('#form_edit_staff_member').serialize();
	  	$.ajax({
	  		url: 'ajax/form_edit_staffmember.php', 
	  		method:"POST",
	  		data:form_data,
	  		dataType:"text",
	  		success:function(result){
	  			$("#output").html(result);
	  		}
	  	})	  
});

$(document).on('click', '#btn_update_rating_of_staffmember',function(){
	  	var form_data = $('#form_edit_staffmember_rating').serialize();
	  	$.ajax({
	  		url: 'ajax/form_edit_staffmember.php', 
	  		method:"POST",
	  		data:form_data,
	  		dataType:"text",
	  		success:function(result){
	  			$("#output").html(result);
	  		}
	  	})	  
});


$(document).on('click', '#show_new_staffrating_form',function(){
		$("#output").empty();
	  		$.ajax({
	  			url: 'ajax/form_create_staffrating.php', 
	  			success:function(result){
	  				$("#output").html(result);

	  			}
	  		})	  
});

$(document).on('click', '#btn_edit_staff_rating',function(){
	  		var id=$(this).data("id2"); 
	  		$.ajax({
	  			url: 'ajax/form_edit_staffrating.php', 
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
					$("#output").html(result);
	  			} 
	  		})	  
});

$(document).on('click', '#btn_delete_staff_rating',function(){
	  		var id=$(this).data("id8"); 
	  		$.ajax({
	  			url: 'ajax/form_edit_staffmember.php', 
	  			method:"POST",
	  			data:{id_var:id},
	  			dataType:"text",
	  			success:function(result){
					$("#output").html(result);
	  			} 
	  		})	  
});

$(document).on('click', '#btn_archive_staff_rating',function(){
	  		var id=$(this).data("id8"); 
	  		$.ajax({
	  			url: 'ajax/form_edit_staffmember.php', 
	  			method:"POST",
	  			data:{id_archive:id},
	  			dataType:"text",
	  			success:function(result){
					$("#output").html(result);
	  			} 
	  		})	  
});

$(document).on('click', '#btn_edit_staffmember_rating',function(){
	  		var id=$(this).data("id9"); 
	  		$.ajax({
	  			url: 'ajax/form_edit_staffmember_rating.php', 
	  			method:"POST",
	  			data:{id_var:id},
	  			dataType:"text",
	  			success:function(result){
					$("#new_rating").html(result);
	  			} 
	  		})	  
});



$(document).ready(function(){
	$(document).on('click', '#create_new_staff_member',function(){
		$("#messages").empty();
		$(".btns_forms_output").html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25"><br>');
		var form_data = $('#f_cn_staff').serialize();
	  		$.ajax({
	  			url: 'ajax/act_create_new_staffmember.php', 
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$(".btns_forms_output").empty();
	  				$("#messages").html(result);
	  				$("#staffmember_table").load('ajax/get_staff_members.php');
	  			}
	  		})	  
	  });
});

$(document).ready(function(){
	$(document).on('click', '#upload_file',function(){
		$("#messages").empty();
	  	$("#messages2").empty();
	  	$("#messages3").empty();
	  	var form_data = $('#form_fupl').serialize();
	  	
	  		$.ajax({
	  			url:"ajax/act_upload_file.php",
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages").html(result);
	  				$("#output").empty();
	  				
	  			} 			
	  		})
	  		
	  	
	  });
});

$(document).ready(function(){
	$(document).on('click', '.btn_vw_obj',function(){
		$("#messages").empty();
	  	$("#messages2").empty();
	  	$("#messages3").empty();
	  	var id=$(this).data("id2"); 
	  		$.ajax({
	  			url:"../admin/ajax/get_object.php",
	  			method:"POST",
	  			data:{id_hash:id},
	  			dataType:"text",
	  			success:function(result){
	  				$('.modal-body').html(result);
	  				$('#fileModal').modal('show');
	  			} 
	  		})	  
	  });
});

$(document).on('click', '.btn_delete_file',function(){
	  	var id=$(this).data("id4");
	  	$("#messages").empty();
	  	$("#messages2").empty();
	  	$("#messages3").empty();
	  	if(confirm("Are you sure wou want to delete this file? This can NOT be made undone."))
	  	{
	  		$.ajax({
	  			url:"ajax/act_delete_file.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages2").html(result);
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  	}
});

$(document).on('click', '.btn_delete_fileconn',function(){
	  	var id=$(this).data("id4");
	  	$("#messages").empty();
	  	$("#messages2").empty();
	  	$("#messages3").empty();
	  		$.ajax({
	  			url:"ajax/act_delete_fileconn.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages3").html(result);
	  			} 			
	  		})
	  		$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
});



$(document).ready(function(){
  $("#button_add_file_conn").click(function(){
    $("#div_add_file_conn").toggle();
  });
})



$(document).ready(function(){
	$(document).on('click', '#add_file_conn',function(){
		$("#messages").empty();
	  	$("#messages2").empty();
	  	$("#messages3").empty();
	  	var form_data = $('#form_add_file_conn').serialize();  	
	  		$.ajax({
	  			url:"ajax/act_create_file_conn.php",
	  			method:"POST",
	  			data:form_data,
	  			dataType:"text",
	  			success:function(result){
	  				$("#messages3").html(result);
	  				$("#output").empty();
	  				$("#messages2").empty();	
	  			} 			
	  		})	  			  	
	  });
});

$(document).ready(function(){	
	var arrayReturn = [];
	$.ajax({
		url: "ajax/get_data.php",  
		async: true,
		dataType: 'json',
		success: function (data) {
			for (var i = 0, len = data.length; i < len; i++) {
				var id = (data[i].id).toString();
				var name = (data[i].name).toString();

				arrayReturn.push({'value' : data[i].name, 'data' : id});
			}
			//send parse data to autocomplete function
			loadSuggestions(arrayReturn);
			console.log(arrayReturn);
		}
	});
	function loadSuggestions(options) {
		$('.autocomplete').autocomplete({
			lookup: options,
			onSelect: function (suggestion) {
				$(this).closest('div').find('.selected_option').val(suggestion.data);//css("background-color", "green");// .html(suggestion.data);

			}
		});
	}
});

$(document).ready(function(){	
	var arrayReturn2 = [];
	$.ajax({
		url: "ajax/get_files.php",  
		async: true,
		dataType: 'json',
		success: function (data) {
			for (var i = 0, len = data.length; i < len; i++) {
				var file_id = (data[i].file_id).toString();
				var name = (data[i].name).toString();
				arrayReturn2.push({'value' : data[i].name, 'data' : file_id});
			}
			//send parse data to autocomplete function
			loadSuggestions2(arrayReturn2);
			console.log(arrayReturn2);
		}
	});
	function loadSuggestions2(options) {
		$('.autocomplete2').autocomplete({
			lookup: options,
			onSelect: function (suggestion) {
				$(this).closest('div').find('.selected_option_file').val(suggestion.data);//css("background-color", "green");// .html(suggestion.data);

			}
		});
	}
});

// -------------------

// new scripts

$(document).on('click', '.btn_edit_incident',function(){
	   var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/form_edit_incident.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  			}
	  		})	  
});




$(document).on('click', '#submit_update_incident_form',function(){
	  	var form_data = $('#edit_incident_form').serialize();
	  	$.ajax({
	  		url: 'ajax/act_update_incident.php', 
	  		method:"POST",
	  		data:form_data,
	  		dataType:"text",
	  		success:function(result){
	  			$("#messages").html(result);
	  		}
	  	})	  
});

$(document).on('click', '#report_incident',function(){
    $.ajax({
    	url: "ajax/form_create_incident.php", 
    	success: function(result){
	      $("#output").html(result);
	    }
  	})  
});

$(document).on('click', '#create_incident_report',function(){
	  	var form_data = $('#form_report_incident').serialize();
	  	$.ajax({
	  		url: 'ajax/act_create_new_incident_report.php', 
	  		method:"POST",
	  		data:form_data,
	  		dataType:"text",
	  		success:function(result){
	  			$("#output").html(result);
	  		}
	  	})	  
});

$(document).on('click', '#create_new_change_log_item',function(){
	  	var form_data = $('#form_new_change_log').serialize();
	  	$.ajax({
	  		url: 'ajax/act_create_new_change_log.php', 
	  		method:"POST",
	  		data:form_data,
	  		dataType:"text",
	  		success:function(result){
	  			$("#output").html(result);
	  		}
	  	})	  
});

$(document).on('click', '#update_change_log_item',function(){
	  	var form_data = $('#form_update_change_log').serialize();
	  	$.ajax({
	  		url: 'ajax/act_update_change_log.php', 
	  		method:"POST",
	  		data:form_data,
	  		dataType:"text",
	  		success:function(result){
	  			$("#output").html(result);
	  		}
	  	})	  
});

$(document).on('click', '.btn_edit_changelog_item',function(){
	  	var id=$(this).data("id2");
	  	$(this).closest('tr').find('.edit_class').append('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">');
	  
	  		$.ajax({
	  			url:"ajax/form_edit_changelog.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$('.edit_class').empty();
	  				$("#messages").empty();
	  				$("#output").html(result);
	  			}		
	  		})  
});


$(document).on('click', '.btn_delete_changelog_item',function(){
	  	var id=$(this).data("id2");  
	  	$(this).closest("tr").hide(1000, function(){$(this).closest("tr").remove();});
	  		$.ajax({
	  			url:"ajax/act_delete_changelog_item.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);	
	  			}
	  		})	  
});

$(document).on('click', '#act_cn_question',function(){
		$(".messages").html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25"><br>');
		$("#act_cn_question").remove();
		
	  	var form_data = $('#qn_question').serialize();
	  	$.ajax({
	  		url: 'ajax/act_create_new_question.php', 
	  		method:"POST",
	  		data:form_data,
	  		dataType:"text",
	  		success:function(result){
	  			$("#output").empty();
	  			$("#messages").html(result);
	  			
	  		}
	  	})	  
});


$(document).on('click', '.confirm_booking',function(){
	 	$(this).closest('tr').find('.edit_class').append('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25">');
	  	$(this).closest('tr').find('.conf_class').empty();
	  	
	  	var booknr=$(this).data("id3");
	  		$.ajax({
	  			url:"ajax/act_booking_registration.php",
	  			method:"POST",
	  			data:{booknr:booknr},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output").html(result);
	  				$('.edit_class').empty();	 
	  			} 	
	  				
	  		})
});

$(document).on('click', '.help-item',function(){
		$("#output_help").html('<img src="<?php echo get_setting_value('IMG_ROOT'); ?>loading.gif" width="25"><br>');
	  	var id=$(this).data("id2");  
	  		$.ajax({
	  			url:"ajax/get_help_item.php",
	  			method:"POST",
	  			data:{id:id},
	  			dataType:"text",
	  			success:function(result){
	  				$("#output_help").html(result);
	  			}
	  		})	  
 });
