import { useEffect, useState } from "react";
import maleImage from "../../../assets/images/boy.png";
import femaleImage from "../../../assets/images/female.png";
import setTitle from "../_functions/setTitle";

const IWCalculator = () => {
    const essentials = {
        title: setTitle("Calculate your ideal weight")
    }

    const resultPlaceHolder = {msg:"",human: {weight:"",height:"",gender:"",margin:""}};

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState(0);

    const [result, setResult] = useState(resultPlaceHolder);
    const [resultLoading, setResultLoading] = useState(false);
    const [resultsLoaded, setResultLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    
    function handleSubmit(e) {
        e.preventDefault();

        let _errors = {};

        (height>250 || height<100) ? _errors['height'] = true : _errors['height'] = false;
        (weight>350 || weight<30) ? _errors['weight'] = true : _errors['weight'] = false;
        (gender === 0) ? _errors['gender'] = true : _errors['gender'] = false;

        setErrors(_errors);

        if(!_errors['gender'] && !_errors['weight'] && !_errors['height']) {
            fetchResult();
        }
        else {
            setResultLoaded(false);
        }

    }
    function fetchResult() {
        setResultLoading(true);
        fetch("http://localhost:8080/api/getIdealWeightResult?" + new URLSearchParams({
            weight: weight,
            height: height,
            gender: gender
        }))
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw response.json();
        })
        .then(data=> {
            setResult(data);
            setResultLoading(false);
            setResultLoaded(true);
        })
        .catch(error=> {
            console.log("System error"+error);
        })
    }
    function handleWeightChange(event) {
        setWeight(event.target.value)
    }
    function handleHeightChange(event) {
        setHeight(event.target.value)
    }
    function handleGenderChange(event) {
        setGender(event.target.value);
        console.log(gender);
    }
    return (
        <div>
            <div className="ideal-weight-calculator calculator-pattern">
                <h2 className="calculator-pattern__title">İdeal Çəki Hesablayıcı</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-element">
                                <label>Boy <span>(santimetr ilə)</span></label>
                                <input value={height} onChange={handleHeightChange} placeholder="məsələn: 176" type="number" />
                                {errors['height'] && <p className="calculator-form__error">*Boy düzgün deyil</p>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-element">
                                <label>Çəki <span>(kiloqram ilə)</span></label>
                                <input value={weight} onChange={handleWeightChange} placeholder="məsələn: 72" type="number"/>
                                {errors['weight'] && <p className="calculator-form__error">*Çəki düzgün deyil</p>}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-element-radio">
                                <label>Cins</label>
                                <div className="form-element-radio__part">
                                    <input onChange={handleGenderChange} name="gender" type="radio" value={1}/>
                                    <div style={{backgroundImage: `url(${maleImage})`}} className="checkmark"></div>
                                </div>
                                <div className="form-element-radio__part">
                                    <input onChange={handleGenderChange}  name="gender" type="radio" value={2}/>
                                    <div style={{backgroundImage: `url(${femaleImage})`}} className="checkmark"></div>
                                </div>
                                {errors['gender'] && <p className="calculator-form__error">*Cins seçin</p>}
                            </div>
                        </div>
                    </div>
                    <button className="calculator-form__submit">Hesabla</button>
                </form>
            </div>
            {resultsLoaded && 
                <div className="calculator-result">
                    <div className="calculator-result__inputs">
                        <h2 className="calculator-result__inputs__title">Nəticə</h2>
                        <p className="calculator-result__inputs__info">{result.human.gender == 1 ? "Kişi" : "Qadın"}, {result.human.height} sm</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-xs-6">
                            <div className="ideal-weight-box calculator-result__box">
                                <p className="box__sub">ideal Kilo</p>
                                <h3 className="box__title">{result.ideal_weight} <small>kq</small></h3>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-6">
                            <div className="user-weight-box calculator-result__box">
                                <p className="box__sub">sənin kilon</p>
                                <h3 className="box__title">{result.human.weight} <small>kq</small></h3>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="user-margin-box calculator-result__box">
                                <p className="box__sub">{result.human.margin >= 0 ? "Artıq" : "Əksik" } çəki</p>
                                <h3 className="box__title">{Math.abs(result.human.margin)} <small>kq</small></h3>
                            </div>
                        </div>
                    </div>
                    <div className="calc-advice-box">
                        <h3 className="calc-advice-box__title">Tövsiyəmiz</h3>
                        <p className="calc-advice-box__message">{result.msg}</p>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default IWCalculator