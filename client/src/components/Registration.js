import React, {useState} from 'react'

// import { useNavigate} from "react-router-dom";

import "../CSS/Login.css";

import Axios from 'axios'

function Registration() {

    const url = "http://localhost:5000/Registration"
    const [data, setData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        selection: ""
    })
    const [dataError, setDataError] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        selection: ""
    })
    // const navigate = useNavigate()

    const handle = (e) => {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    function submit() {

        if (data.username.length === 0) {
            setDataError((prevState) => {
                return {...prevState, username: "Username cant be empty"}
            })
        } else {
            setDataError((prevState) => {
                return {...prevState, username: ""}
            })
        }

        if (data.password.length === 0){
            setDataError((prevState)=>{
                return {...prevState,password: "Password cant be empty"}
            })
        }else{
            setDataError((prevState )=>{
                return{...prevState,password: ""}
            })
        }

        if(data.confirmPassword!==data.password){
            setDataError((prevState)=>{
                return{...prevState,confirmPassword: "Password dose not match!"}
            })
        }else {
            setDataError((prevState)=>{
                return{...prevState,confirmPassword: ""}
            })
        }
        if(data.selection===""){
            setDataError((prevState)=>{
                return{...prevState,selection: "Choose one option!"}
            })
        }else {
            setDataError((prevState)=>{
                return{...prevState,selection: ""}
            })
        }

            if (data.password === data.confirmPassword) {
                Axios.post(url, {
                    username: data.username,
                    password: data.confirmPassword,
                    selection: data.selection
                }).then(res => {
                    console.log(res.data)
                    console.log(res.data.error);
                }).catch((err) => {
                    console.log()
                    setDataError((prevState) => {
                        return {...prevState, username: err["response"]["data"].error}
                    })
                })
            }

            }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                            style={{borderradius: 1}}
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Registration</h2>
                                    <p className="text-white-50 mb-5">
                                        Please Enter your details here!
                                    </p>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            onChange={(e) => handle(e)}
                                            type="email"
                                            id="username"
                                            value={data.username}
                                            placeholder="Username"
                                            required
                                            className="form-control form-control-lg"
                                        />

                                        <span> {dataError.username}</span>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            onChange={(e) => handle(e)}
                                            type="password"
                                            id="password"
                                            value={data.password}
                                            placeholder="Password"
                                            required
                                            className="form-control form-control-lg"
                                        />
                                        <span>{dataError.password}</span>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input
                                            onChange={(e) => handle(e)}
                                            type="password"
                                            id="confirmPassword"
                                            value={data.confirmPassword}
                                            required
                                            placeholder="Confirm Password"
                                            className="form-control form-control-lg"
                                        />
                                        <span>{dataError.confirmPassword}</span>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <select className="form-control form-control-lg" name='Pack'
                                                id='selection'
                                                value={data.selecedfile}
                                                onChange={(e) => handle(e)}>
                                            <option value={''}>Choose any one!</option>
                                            <option value={'Four Wheel'}>Four wheel</option>
                                            <option value={'Two wheel'}>Two wheel</option>
                                            <option>Both</option>
                                        </select>
                                        <span>{dataError.selection}</span>
                                    </div>

                                    {/*<Link to={{*/}
                                    {/*  pathname:'/admin',*/}
                                    {/*  state:data*/}
                                    {/*}}>*/}
                                    <button
                                        onClick={() => submit()}
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit">Login
                                    </button>
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Registration
