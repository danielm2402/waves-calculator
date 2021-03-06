import React from 'react'
import MathJax from 'react-mathjax2'
import '../Blackboard.css'
export default function Index(props) {
    return (
        <div className="container-solution" >
            <div className="left-solution">
                <div className="title">
                    <h4>Frecuencia natural de vibracion (Wo):</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=sqrt (frac{g}{l})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=sqrt (frac{' + props.inputs.gravity.data + '}{' + props.inputs.length.data + '})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=' + props.response.frecuenciaNatural + 'frac{rad}{s}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>
                <div className="title">
                    <h4>Frecuencia (f):</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'f=frac{W_o}{2\\pi}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'f=frac{' + props.response.frecuenciaNatural + '}{2\\pi}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'f=' + props.response.frecuencia + 'hz'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>
                <div className="title">
                    <h4>Gamma:</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'\gamma=frac{b}{2*m}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{`\gamma=frac{${props.inputs.const.data}}{2*${props.inputs.mass.data}}`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{`\gamma=${props.response.gamma}`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>

            </div>
            <div className="right-solution">
                <div className="title">
                    <div className="title">
                        <h4>Ecuación de movimiento:</h4>
                    </div>

                    <div className="ecuation">
                        {props.response.type === 'subamortiguado' ?
                            <div>
                            <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Comparando Gamma con Frecuencia natural, como:</h5>
                            <div className="ecuation">
                                <MathJax.Context input='ascii'>
                                    <div>
                                        <MathJax.Node >{'\gamma^2 < W_0^2'}</MathJax.Node>
                                    </div>
                                </MathJax.Context>
                                <MathJax.Context input='ascii'>
                                    <div>
                                        <MathJax.Node >{`${props.response.gamma}^2 < ${props.response.frecuenciaNatural}^2`}</MathJax.Node>
                                    </div>
                                </MathJax.Context>
                            </div>
                            <h5 style={{ color: '#234f4f', textAlign: 'left', marginTop: 20 }}>Al ser gamma menor que la frecuencia natural</h5>
                            <h5 style={{ color: '#234f4f', textAlign: 'left',  marginBottom: 20}}> es un sistema subamortiguado, por lo tanto su ecuación está dada por: </h5>
                            <div className="ecuation">
                                <MathJax.Context input='ascii'>
                                    <div>
                                        <MathJax.Node >{'θ(t)=c*e^(-\gamma*t)* Cos (W*t+\phi)'}</MathJax.Node>
                                    </div>
                                </MathJax.Context>
                                <MathJax.Context input='ascii'>
                                    <div>
                                    <MathJax.Node >{`θ(t)=${props.response.c}*e^(-${props.response.gamma}*t)* Cos (${props.response.ommega}*t+${props.response.phi})`}</MathJax.Node>
                                    </div>
                                </MathJax.Context>

                            </div>
                        </div>
                            : props.response.type === 'amortiguado' ?
                                <div>
                                    <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Comparando Gamma con Frecuencia natural, como:</h5>
                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{'\gamma^2 = W_0^2'}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`${props.response.gamma}^2 = ${props.response.frecuenciaNatural}^2`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                    <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Al ser iguales, es un sistema criticamente amortiguado, por lo tanto su ecuación está dada por: </h5>
                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{'θ(t)=(c1+c2*t)e^(-\gamma*t)'}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`θ(t)=(${props.response.c1}+${props.response.c2}*t)e^(-${props.response.gamma}*t)`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>

                                    </div>
                                </div>
                                :
                                <div>
                                <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Comparando Gamma con Frecuencia natural, como:</h5>
                                <div className="ecuation">
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{'\gamma^2 > W_0^2'}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{`${props.response.gamma}^2 > ${props.response.frecuenciaNatural}^2`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                </div>
                                <h5 style={{ color: '#234f4f', textAlign: 'left', marginTop: 20 }}>Al ser gamma mayor que la frecuencia natural</h5>
                                <h5 style={{ color: '#234f4f', textAlign: 'left',  marginBottom: 20}}> es un sistema sobreamortiguado, por lo tanto su ecuación está dada por: </h5>
                                <div className="ecuation">
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{'θ(t)=c_1*e^(m_1*t)+ c_2*e^(m_2*t)'}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                        <MathJax.Node >{`θ(t)=${props.response.c1}*e^(${props.response.m1}*t)+ ${props.response.c2}*e^(${props.response.m2}*t)`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
    
                                </div>
                            </div>}
                        {/*  <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(t)=θ_0 Cos(W_0t+\\varphi)'}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>[1] Evaluar las condiciones iniciales en t=0 </h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(0)=θ_0 Cos(W_0t+\\varphi)=' + props.inputs.posInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(0)=θ_0 Cos(varphi)=' + props.inputs.posInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>[2] Evaluar las condiciones iniciales en t=0</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'frac{dθ(0)}{dt}= -W_o θ_0 Sen(W_ot + \\varphi) =' + props.inputs.velInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>

                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'frac{dθ(0)}{dt}= -W_o θ_0 Sen(\\varphi) =' + props.inputs.velInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Dividimos [2] entre [1] y despejamos para hallar Phi</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'frac{-W_o θ_0 Sen(\\varphi)}{θ_0 Cos(\\varphi)} =' + props.inputs.velInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'\\varphi=arctan(frac{' + props.inputs.velInitial.data + '}{-' + props.response.frecuenciaNatural+'* '+  props.inputs.posInitial.data + '})'}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'\\varphi=' + props.response.desfase}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Hallamos el valor de la amplitud</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{`θ_0= frac{${props.inputs.posInitial.data}}{${props.response.funcAmplitud==='cos'?'Cos':'Sen'}(${ props.response.desfase})}`}</MathJax.Node>
                                <MathJax.Node >{`θ_0=${props.response.amplitud} rad`}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>La ecuación que describe el movimiento del pendulo es:</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(t)=' + props.response.amplitud + '*Cos(' + props.response.frecuenciaNatural + ' t+' + props.response.desfase + ')'}</MathJax.Node>
                            </div>
                        </MathJax.Context> */}
                    </div>
                </div>
            </div>


        </div>
    )
}
