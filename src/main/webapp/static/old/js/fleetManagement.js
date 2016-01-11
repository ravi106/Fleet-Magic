$(document).ready(function(){
    $('#table_id').DataTable( {
        "ajax": "http://localhost:8080/fleetmagic/vehicles"
    } );
	//$('#table_id').DataTable();
	$('input:radio[value=category]').prop('checked', true);
	$('#radioFields input').click(function(){
		if($(this).val() == 'search'){
			$('#categoryData').hide();
			$('.searchResult').hide();
			$('#searchData').show();
		}
		else if($(this).val() == 'category'){
			$('#searchData').hide();
			$('#categoryData').show();
			$('#carList').hide();
		}
	});
	$('#vehicleCategory button').click(function(){
		if(this.id == 'sedanList'){
			$('#carList').show();
		}
		else if(this.id == 'hatchbackList'){
			$('#carList').show();
		}
		else if(this.id == 'suvList'){
			$('#carList').show();
		}
	});
	$('#searchButton').click(function(){
		$('.searchResult').show();
		$('#searchTable').DataTable();
	});
});