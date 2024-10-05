let myPeople=["アキラ", "カオル", "サツキ", "タクミ"];
let myMeal=["和食", "洋食", "中華", "お菓子"];
let myDrink=["お茶", "コーヒー", "ジュース", "水"];

function mySet(){
    let myAnswers=0;
    let myHints=myPeople[0]+"，"+myPeople[1]+"，"+myPeople[2]+"，"+myPeople[3]+"の4人は、"+myMeal[0]+"，"+myMeal[1]+"，"+myMeal[2]+"，"+myMeal[3]+"のうち違うものを食べて、"+myDrink[0]+"，"+myDrink[1]+"，"+myDrink[2]+"，"+myDrink[3]+"のうち違うものを飲みました。\n\n";
    let myMemories=0;
    let myAnswer=[];
    for(i=0;i<3;i+=1){
        myAnswer[i]=[];
        for(j=0;j<4;j+=1){
          myAnswer[i][j]=[];
            for(k=0;k<4;k+=1){
                myAnswer[i][j][k]=0;
            }
        }
    }
    let myHint=[];
    for(i=0;i<3;i+=1){
        myHint[i]=[];
        for(j=0;j<4;j+=1){
            myHint[i][j]=[];
            for(k=0;k<4;k+=1){
                myHint[i][j][k]=0;
            }
        }
    }
    let myAssump=[];
    for(i=0;i<3;i+=1){
        myAssump[i]=[];
        for(j=0;j<4;j+=1){
            myAssump[i][j]=[];
            for(k=0;k<4;k+=1){
                myAssump[i][j][k]=0;
            }
        }
    }
    let myMemory=[];
    for(i=0;i<3;i+=1){
        myMemory[i]=[];
        for(j=0;j<4;j+=1){
            myMemory[i][j]=[];
            for(k=0;k<4;k+=1){
                myMemory[i][j][k]=0;
            }
        }
    }
    let tmp0=[];
    let tmp1=0;
    let tmp2=0;
    let tmp3=0;
    let tmp4=0;
    let tmp5=0;
    for(i=0;i<2;i+=1){
        tmp0=[0,1,2,3];
        tmp1=Math.floor(Math.random()*4);
        myAnswer[i][0][tmp0[tmp1]]=1;
        tmp0.splice(tmp1,1);
        tmp1=Math.floor(Math.random()*3);
        myAnswer[i][1][tmp0[tmp1]]=1;
        tmp0.splice(tmp1,1);
        tmp1=Math.floor(Math.random()*2);
        myAnswer[i][2][tmp0[tmp1]]=1;
        tmp0.splice(tmp1,1);
        myAnswer[i][3][tmp0[0]]=1;
    }
    for(j=0;j<4;j+=1){
        for(k=0;k<4;k+=1){
            for(l=0;l<4;l+=1){
                myAnswer[2][j][k]+=myAnswer[0][l][j]*myAnswer[1][l][k];
            }
        }
    }
    for(i=0;i<3;i+=1){
        for(j=0;j<4;j+=1){
            for(k=0;k<4;k+=1){
                myAnswer[i][j][k]=2*myAnswer[i][j][k]-1;
                myHint[i][j][k]=myAnswer[i][j][k];
            }
        }
    }
    while(myMemories<48){
        tmp2=Math.floor(Math.random()*3);
        tmp3=Math.floor(Math.random()*4);
        tmp4=Math.floor(Math.random()*4);
        if(myMemory[tmp2][tmp3][tmp4]==0){
            if(myHint[tmp2][tmp3][tmp4]==0){
                myMemory[tmp2][tmp3][tmp4]=1;
            }else{
                tmp5=myHint[tmp2][tmp3][tmp4];
                myHint[tmp2][tmp3][tmp4]=0;
                myAnswers=0;
                for(x0=0;x0<4;x0+=1){
                    for(y0=0;y0<3;y0+=1){
                        for(z0=0;z0<2;z0+=1){
                            for(x1=0;x1<4;x1+=1){
                                for(y1=0;y1<3;y1+=1){
                                    for(z1=0;z1<2;z1+=1){
                                        for(i=0;i<3;i+=1){
                                            for(j=0;j<4;j+=1){
                                                for(k=0;k<4;k+=1){
                                                    myAssump[i][j][k]=0;
                                                }
                                            }
                                        }
                                        tmp0=[0,1,2,3];
                                        myAssump[0][0][tmp0[x0]]=1;
                                        tmp0.splice(x0,1);
                                        myAssump[0][1][tmp0[y0]]=1;
                                        tmp0.splice(y0,1);
                                        myAssump[0][2][tmp0[z0]]=1;
                                        tmp0.splice(z0,1);
                                        myAssump[0][3][tmp0[0]]=1;
                                        tmp0=[0,1,2,3];
                                        myAssump[1][0][tmp0[x1]]=1;
                                        tmp0.splice(x1,1);
                                        myAssump[1][1][tmp0[y1]]=1;
                                        tmp0.splice(y1,1);
                                        myAssump[1][2][tmp0[z1]]=1;
                                        tmp0.splice(z1,1);
                                        myAssump[1][3][tmp0[0]]=1;
                                        for(j=0;j<4;j+=1){
                                            for(k=0;k<4;k+=1){
                                                for(l=0;l<4;l+=1){
                                                    myAssump[2][j][k]+=myAssump[0][l][j]*myAssump[1][l][k];
                                                }
                                            }
                                        }
                                        for(i=0;i<3;i+=1){
                                            for(j=0;j<4;j+=1){
                                                for(k=0;k<4;k+=1){
                                                    myAssump[i][j][k]=2*myAssump[i][j][k]-1;
                                                }
                                            }
                                        }
                                        tmp1=0;
                                        for(i=0;i<3;i+=1){
                                            for(j=0;j<4;j+=1){
                                                for(k=0;k<4;k+=1){
                                                    if(myAssump[i][j][k]*myHint[i][j][k]<0){
                                                        tmp1=1;
                                                    }
                                                }
                                            }
                                        }
                                        if(tmp1==0){
                                            myAnswers+=1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if(myAnswers>1){
                    myHint[tmp2][tmp3][tmp4]=tmp5;
                    myMemory[tmp2][tmp3][tmp4]=1;
                }
            }
        }
        myMemories=0;
        for(i=0;i<3;i+=1){
            for(j=0;j<4;j+=1){
                for(k=0;k<4;k+=1){
                    if(myMemory[i][j][k]==1){
                        myMemories+=1;
                    }
                }
            }
        }
    }
    for(i=0;i<3;i+=1){
        for(j=0;j<4;j+=1){
            for(k=0;k<4;k+=1){
                if(myHint[i][j][k]>0){
                    if(i==0){
                        myHints=myHints+myPeople[j]+"は"+myMeal[k]+"を食べました。\n";
                    }else if(i==1){
                        myHints=myHints+myPeople[j]+"は"+myDrink[k]+"を飲みました。\n";
                    }else if(i==2){
                        myHints=myHints+myMeal[j]+"を食べた人は"+myDrink[k]+"を飲みました。\n";
                    }
                }else if(myHint[i][j][k]<0){
                    if(i==0){
                        myHints=myHints+myPeople[j]+"は"+myMeal[k]+"を食べませんでした。\n";
                    }else if(i==1){
                        myHints=myHints+myPeople[j]+"は"+myDrink[k]+"を飲みませんでした。\n";
                    }else if(i==2){
                        myHints=myHints+myMeal[j]+"を食べた人は"+myDrink[k]+"を飲みませんでした。\n";
                    }
                }
            }
        }
    }
    myHints+="\n4人は何を食べて何を飲んだでしょうか？";
    document.myForm.myText.value=myHints;
}
