function getJSONDate(dt){
return dt ? dt.toNativeDate().toJSON():dt;
}

function sanitizeString(stringVal){
  log.error("*******************************String Val to Function is "+stringVal);
return (stringVal !=null && stringVal != undefined) ? stringVal: '';
}

function getMultiSelectPickList(val){
  var selectedPicklistVal ="";
  var selectedList;
  if(val && val != null && val.listLength >0){
    selectedList = val.listAllSelected;
  }else{
    return selectedPicklistVal;
  }
  for (count=0;count<selectedList.listLength;count++){
    var tempStr = (count==0) ? selectedList[count].value : (";"+selectedList[count].value);
    selectedPicklistVal+= tempStr;
  }
  return selectedPicklistVal;
}
