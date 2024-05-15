import React,{useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const MeetingModal = ({userData}) => {
    const token = localStorage.getItem('token');
    
    const { firstName, role, _id} = userData;
    const [TopicName, setTopicName] = useState('');
    const [InstructorName, setInstructorName] = useState('');
    const [SelectBatch, setSelectBatch] = useState('');
    const [ClassLink, setClassLink] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const formData = {
                TopicName,
                InstructorName,
                SelectBatch,
                ClassLink,
                firstName,
                role,
                _id,
            };
            console.log("formData =>",formData);
            if(_id){
                const response = await axios.post(`http://localhost:8000/meetingData/${_id}`, {
                    headers: {
                    Authorization: `Bearer ${token}`
                    }   
                });
            }
        } catch (error) {
            
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50'>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h2 className='text-xl font-bold mb-4'>Meeting Details</h2>
                <div className='mb-4'>
                <form onSubmit={handleLogin} class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <label for="TopicName" class="block mb-2 text-sm font-medium text-gray-900">Topic Name</label>
                            <input type="text" name="TopicName" onChange={(e) => setTopicName(e.target.value)} id="TopicName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Topic Name" required=""></input>
                        </div>
                        <div class="col-span-2">
                            <label for="InstructorName" class="block mb-2 text-sm font-medium text-gray-900">Instructor Name </label>
                            <input type="text" name="InstructorName" id="InstructorName" onChange={(e) => setInstructorName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Instructor Name" required=""></input>
                        </div>
                        <div className="col-span-2">
                            <label for="selectBatchLabel" class="block mb-2 text-sm font-medium text-gray-900">Select Batch</label>
                            <select id="selectBatch" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            value={SelectBatch}
                            onChange={(e) => setSelectBatch(e.target.value)}
                            required
                            >
                            <option value="">Select Your Batch</option>
                            <option value="A">Batch A</option>
                            <option value="B">Batch B</option>
                            <option value="C">Batch C</option>
                            </select>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Select Time and time</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                <option selected="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">category</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                <option selected="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label for="ClassLink" class="block mb-2 text-sm font-medium text-gray-900">Class Link</label>
                            <input type="text" name="ClassLink" id="ClassLink" onChange={(e) => setClassLink(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Instructor Name" required=""></input>
                        </div>
                    </div>
                    <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Save Class 
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default MeetingModal;