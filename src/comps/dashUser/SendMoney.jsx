function SendMoney() {
  return (  
    <div className="mt-10 max-w-lg p-6 border rounded-md mx-auto bg-gray-100">
      <h2 className="text-2xl md:text-2xl font-semibold text-center mb-6">Send Money</h2>
      <form className="">
        <label className="block mb-4">
          <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Amount to send:</span>
          <input type="number" name="amount" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="e.g. 500" />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">PIN (5 digit):</span>
          <input type="number" name="amount" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="e.g. 12345" />
        </label>

        <div className="mt-6">
          <button type="submit" className="bg-indigo-600 text-white w-full px-4 py-2 rounded-md hover:opacity-85 transition-opacity">Send</button>
        </div>
      </form>

      <div className="mt-8 text-gray-600">
        <h3 className="font-semibold mb-1">Note:</h3>
        <ul className="list-disc [&>*]:ml-4">
          <li className="text-sm">For each transaction over 100 Taka, 5 Taka fee applies.</li>
          <li className="text-sm">Transfers under 50 Taka are not allowed.</li>
        </ul>
      </div>
    </div>
  );
}

export default SendMoney;