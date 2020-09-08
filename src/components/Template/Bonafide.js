import React, { useState } from 'react';

function Bonafide() {
    const [name, setName] = useState('');
    const [rollno, setRollNo] = useState('');
    const [year, setYear] = useState('');
    const [degree, setDegree] = useState('');
    const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
    const [signature, setSignature] = useState('');

    return (
        <div>
            <p align="center">
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'large' }}>
                        <strong>OFFICE OF THE PRINCIPAL: GOVERNMENT COLLEGE OF TECHNOLOGY, COIMBATORE-13</strong>
                    </span>
                </span>
            </p>
            <p align="center">
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>(Affiliated to Anna University , Chennai)</span>
                </span>
            </p>
            <p align="center"><br /> </p>
            <p align="center">
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>
                        <u>
                            <strong>No. /E /2014 Dated. . .2014 </strong>
                        </u>
                    </span>
                </span>
            </p>
            <p align="center"><br /> </p>
            <p align="center">
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'large' }}>
                        <u>
                            <strong>BONAFIDE CERTIFICATE </strong>
                        </u>
                    </span>
                </span>
            </p>
            <p align="center"><br /> </p>
            <p align="center"><br /> </p>
            <p align="justify">
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}> This is to certify that </span>
                </span>
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>
                        <strong><input value={name} onChange={(e) => setName(e.target.value)} />(Roll No.<input value={rollno} onChange={(e) => setRollNo(e.target.value)} />) </strong>
                    </span>
                </span>
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}> is a bonafide student of this college studying in </span>
                </span>
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>
                        <strong><input value={year} onChange={(e) => setYear(e.target.value)} /></strong>
                    </span>
                </span>
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}> year of Three and a half years of Part-Time B.E. Degree course in</span>
                </span>
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>
                        <strong><input value={degree} onChange={(e) => setDegree(e.target.value)} /></strong>
                    </span>
                </span>
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>during the academic year 2014-15. </span>
                </span>
            </p>
            <p align="justify"><br /> </p>
            <p align="justify">
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}> This certificate is issued with reference to his/her application dated <input value={date} onChange={(e) => setDate(e.target.value)} /> to apply for </span>
                </span>
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>
                        <strong><input value={reason} onChange={(e) => setReason(e.target.value)} />.</strong>
                    </span>
                </span>
            </p>
            <p align="justify">
                <a name="_GoBack" />
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>
                        <strong>Yours Faithfully,</strong>
                    </span>
                </span>
            </p>
            <p align="justify">
                <span style={{ fontFamily: 'Arial, serif' }}>
                    <span style={{ fontSize: 'medium' }}>
                        <strong><input value={signature} onChange={(e) => setSignature(e.target.value)} /></strong>
                    </span>
                </span>
            </p>
            <p><br /> </p>
        </div>
    );
}

export default Bonafide;
