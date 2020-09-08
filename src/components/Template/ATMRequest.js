import React, { useState, useEffect } from 'react';

function ATM() {
    const [bank, setBank] = useState('');
    const [branch, setBranch] = useState('');
    const [date, setDate] = useState('');
    const [account, setAccount] = useState('');
    const [signature, setSignature] = useState('');
    const [edit, setEdit] = useState(false);

    useEffect(() => {

    }, [edit]);

    return (
        <>
            <div>
                <div>{edit ? <p><button onClick={() => setEdit(false)}>Save <i class="fa fa-save"></i></button></p> : <p><button onClick={() => setEdit(true)}>Edit <i class='fas fa-edit'></i></button></p>}</div>
                <br />
                <p>To</p>

                <p>The Bank Manager,</p>

                <p>{edit ? <input value={bank} onChange={(e) => setBank(e.target.value)} placeholder=' Bank Name' /> : bank}</p>

                <p>{edit ? <input value={branch} onChange={(e) => setBranch(e.target.value)} placeholder=' Branch Name' /> : branch}</p>

                <p>{edit ? <input type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder=' Date' /> : date}</p>

                <p>Sub: – Requesting for issuing new ATM card</p>

                <p>Respected Sir/Madam,</p>

                <p>I am an account holder of this bank and my account number is {edit ? <input value={account} onChange={(e) => setAccount(e.target.value)} placeholder=' Account number' /> : account}. I request you to issue a new ATM card for my account as soon as possible I hear with enclose all the necessary documents along with this letter. Please do the needful. Thanking you.</p>

                <p>Yours faithfully</p>

                <p>Signature</p>

                <p>{edit ? <input value={signature} onChange={(e) => setSignature(e.target.value)} placeholder=' Signature' /> : signature}</p>
            </div>
        </>
    );
}

export default ATM;