/* eslint-disable react-refresh/only-export-components */
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success('Job deleted successfully');
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect('/dashboard/all-jobs');
}

const DeleteJob = () =>{
  return(
    <div>
      delete
    </div>
  )
}
export default DeleteJob