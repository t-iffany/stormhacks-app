
export default function Profile() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center justify-center">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fpov-asian-old-senior-woman-video-call-virtual-meeting-with-family-gm1285044973-381994491&psig=AOvVaw1v75T1YhL-n35zZsRC9i6L&ust=1684762112775000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPiM9Y_Chv8CFQAAAAAdAAAAABAD"
          alt="Avatar"
          className="w-24 h-24 p-4 rounded-full"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Name</h2>
        <p>Date of Birth: 01/01/1990</p>
        <p>Age: 33</p>
        <p>Blood Type: A+</p>
        <p>Medical Conditions: Condition 1, Condition 2</p>
        <p>Allergies: Allergy 1, Allergy 2</p>
        <p>Medications: Medication 1, Medication 2</p>
        <p>Primary Language: English</p>
        <p>Emergency Contacts:</p>
        <ul>
          <li>Contact 1: John Doe (123-456-7890)</li>
          <li>Contact 2: Jane Smith (987-654-3210)</li>
        </ul>
      </div>
    </div>
  )
};