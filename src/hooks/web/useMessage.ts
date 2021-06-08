import { ElMessage,ElNotification} from 'element-plus';



function createSuccessNotify(options,type?){
    // let notifyStatus = ['success','warning','info','error'];
    // if(type instanceof Object){
    //     options=type;
    // }
    // if(notifyStatus.indexOf(type)===-1){
    //     throw new Error("请传入正确的类型");
    // }
      return ElNotification({
        ...options,
        type: 'success'
    })
}
function createInfoNotify(options,type?){
      return ElNotification({
        ...options,
        type: 'info'
    })
}
function createWarningNotify(options,type?){
      return ElNotification({
        ...options,
        type: 'warning'
    })
}
function createErrorNotify(options,type?){
      return ElNotification({
        ...options,
        type: 'error'
    })
}




export function useMessage(){
    return {
        createMessage:ElMessage,
        ElNotification,
        createSuccessNotify,
        createWarningNotify,
        createInfoNotify,
        createErrorNotify
    }
}