<script language="javascript" type="text/javascript">
	function checkpost(){//���ǿ�
		if(myform.user.value==""){
			alert("�û���������Ϊ��!");
			myform.username.focus();
			return false;
		}

		if(myform.pwd.value==""){
			alert("�û����벻��Ϊ��!");
			form.password.focus();
			return false;
		}		
				
		if(myform.email.value==""){
			alert("���䲻��Ϊ��!");
			form.password.focus();
			return false;
		}
	}
</script>




ͨ��onclick="return checkpost();"����;