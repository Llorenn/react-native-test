import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

export const ProfileIconNotActive = (props) => (
    <Svg
        width={33}
        height={33}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path fill="url(#a)" d="M0 0h33v33H0z" />
        <Defs>
            <Pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
                <Use xlinkHref="#b" transform="scale(.00195)" />
            </Pattern>
            <Image
                id="b"
                width={512}
                height={512}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABeeSURBVHgB7d3NkSTHmSbgl7u8A5QAvhKwj3tD8bY3YiXoHAmAkaCSxzkBGlRRAnAk6KYEACSogAQAJOBkTHUNwSaBrorwSA8Pfx6zz5o0oxmBznD3Nzz8JwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjuY3AY7u43c1Kx/43/74rqYAhyYAwDGUS91c6qNLvcrjgP/058dZ5ikIPP0513fv/vw2QNcEAOhPyeNg//t3f87/fekgv8bbPAaBub6LUABdEQBg/+bB/bNLffruzxaD/XNMeQwFc/01PiMAwIuVS50v9eZSf+u03lzq83x43QEADG1+s58HzHng7GGAf0l9c6nXEQYA4H/c5JiD/i/V3bt/ZwAYztPb/kP6Grxr1kMeZwUA4PDmgf98qR/S12C9dRA4x+cBAA7IwC8IADAQA/+yIPBFAKBTNxn7G3+NIPA6ANCJkrFW9W9dd/FZAICdm6euTfdvU+cAwM6UeOu/Rj3EbAAAO+Gt/7r1QywSBKCheYX/1+lr8DxS3cVsAABX9ipW+O+hHiIEAHAlp5jy31P5JADA5s7pa3Acqc4BgMrm7/336WtAHLHuAgCVzIP/fJ99L4Pg6PXNu98MABYrMfj3WA+xOBCAhUqs9BcCABhKicFfCABgKCUGfyEAgKGUGPyFAACGUmLwFwIAGMp8tK/T/Y5fP7z7rQHA4D9YCQEA5CYGfyEAgKGc0tegperX68CgfhMY0ynjnRs/vffn++bjc0vGO0b3dKk/BwYjADCiU449+E+Xenupb9/95/nP7/My8/T4R+/+vMljMDjylPm/X+qrAHBY5/Q1Rf2cmr9n3+VxOnvLt/dyqT+++/96SPK3g9U5ABzSOX0NSB8a9L+81KdpZ/7/vsuxFlGeA8ChnNPXQPRL9eZSn2df3+nnf5ZTjjMrcA4Ah3BOXwPQLw38n2b/5k8E8z/r3v8+hQCAgzunr4Gn14H/faf0PyNwDgBdmld19zTg/Lzm7+qfp3+n9B0EzgGgK/fpa6D5eX2dY+3FL3lcLNjL3//7dRcAunCfvgaYp5rf+l/nuE7pdzbgLgDs1vzWfJ++Bpan+iZjXFVb0ncIGO2URIDdmzvmeRDtZTD5eX2Z8QaW+d+5p9/oqeZnTAgA2ImeB//bjGv+d+/hNxICAHao58H/CKv81/oiff1mPw8BJQA0UdLv9+TX4ckpff12T/UQIQDg6kr6HPyPvtJ/qVP6+h2FAIAGSvod/I98pe5a899NjxcLPUQIANhcicH/yIQAAP5JicF/BPPf1UP6+o2FAICNGBTGUuL3BhieaeExlZjxARiWwX9sJUIAwHBuYvCn7xDwWQB4kVP66uwN/tsqcegTwOGd0lcHb/C/jhIhAOCwej4b3gUx2+v57ocvAsC/dE5fHbrBv42eQ8A5APyDc/rqyJ/qTQz+LQgBAAdwTl8d+FPdhdbu09czIwQAvHNOXx23wX9/7tPXsyMEAMM7p68O2+C/X1+mr2dICACG9VX66qif6jbs1fzb9PAMvV9fBmAQ9+mrgzb492P+jXp4lt6vuwAc3H366pgN/v2Zf6senikhABjCvG3r6/TVIRv8+zX/Zj08W+/X3EZsKwUOo+c927ehV/Nv18Mz9n45WAo4hJ4H/89D727T1zMnBACHUNLv4P86HMUpfT17Pw8BJQCdKXFzG/txSl/P4FM9RAgAOlLS5+D/Qwz+R3bK42/cy/MoBABdKel38H8Vjm7+jYUAgMpKDP7snxAAUFFJn4P/Qwz+I5p/8/m37+EZFQKA3dKZ0qMSoRVgMdOp9KzEZyuAFzP4cwQlQgDAs51i8Oc4SvoNAZ8F4EpO6auTNPjzHCUOrwL4Raf01TE+lWNVeY4SIQDgn3yRvjrEnw/+LlbhuXq+wOocgMrO6asjNPizhhAAkH4H/69j8Ge5+dmZn6GennkhAKjmnL46vqe6C9Rxn76efSEAWO2cvjo8gz9buU9fbUAIABY7p6+O7qm+DGxjfrZ6agtCAPBi9+mrg3uq28C25mesh7bwfgnGwAfdp6+OzeDPtc3PWg9t4v26C8AvuE9fHZrBn1bmZ66HtiEEAL9q3u70Jn11ZAZ/WpufvR7ayPv1JrbHAun7wJPbQFvzM9hDW3m/HJAFg+t58P88sA+OyAa6UtLv4P86sC+n9NWGnuohLsmCoZS48QxqO6WvtiQEwGBK+hz8f7jUp4F9+yyPz2ov7UoIgEGU9Dv4vwr0YX5WhQBgN0oM/nAtQgCwCyV9Dv4PMfjTr5J+210J0D1vItBOifANNGDwh/ZKfH4DrsjgD/tRIgQAV3CKwR/2psT5G8CGTumrYzH4M5ISIQDYwCl9dShP5UxyRlLiGG6gonP66kgM/oys54u4zgF245y+OhCDPwgBwErn9NVxPNVdDP4wt4H79NV2hQDYgXP66jB+PvgDf3efvtqwEAANndNXR2Hwh193n77ashAADZzTVwfxVF8G+DW36atNCwFwRffpq2N4qtsAzzG3lR7a9Pt1F2Az9+mrQzD4wzJzm+mhbQsBcAX36asjMPjDOnPb6aGNCwGwkZ73Ct8GWGNuQz209ffLGR+wksEfmNtSD21eCIBKeh78Xweo6Yv01QcIAbBQiRvDgH90Sl99wVM9xE2f8CwlBn/gXzulrz5BCIBnmqfK5obSQ4P+ef1wqU8DXMOrPLa5XvqHn4cAnwPgF/T4zX/uiF4FuKZeQ4A1AfAvfJW+GrLBH9rqNQTcBfgf5/TVgOd6iG960FpJn58NzwFyk74arsEf9qWkzxBwExhYSX8N9yEGf9ibkj77EusBGNZd+muwJcAelfQXAr4ODOiUvhrqQwz+sHcl/YWAzwID6W2///zPWgL0oKS//sWnAIZxTj+N075d6E9JX+eK3AYGUNJPozT4Q796ulBsPs+gBA7uLn00SIM/9K+nEHAXOLASDRG4vvv00fd46eCw5oF17w3wLsAR3Wf//c9t4IBK9n9u912AI7vPvvuguY80C8DhnLLvhncbYARzW99zX/R54GD2vBDnNsBI5ja/1/7oTeBASvbb2G4DjGhu+3vtl24CB/Fl9tnIbgOMbO4D9E2woT1O/2tgwGzuC/bWP70JHEDJ/hrXbQD+bu4T9tZP2Q1A907ZV6N6HYB/doq+Cqq6y34alO01wK85ZT/91V2gc3v5/n8bgA+b+4o99FkPgY7N37A0JKA3b7KPvss6gA39r7ClV9mHPwTg+f6UfShhMwLAtn6f9u4vNQXg+d6+q9b20IcelgCwrZL27gPwcnuYBdjLLCq8WOvvaA8BWK71DaZvwmbMAGyrdXp9G4Dl/pK2zABsSADYzsdpv4L12wAs17oPmfvQT8ImBIDt7CG5CgDAGn9Ne2YBNiIAbGcPq1e/C8ByU9orYRMCwHZap9b57f/HACw39yFT2jIDsBEBYDslbU0BWK/1p0QBYCMCwHb2MAMAsNaUtkrYhACwDTsAgKNovZbIToCNCADb2MOU1fcBWO9t2vMZYAMCwDb2sAPADABQw5T2SqhOANhGSVsGf6CmKW2ZAdiAALCN1g/rFIB63qatEqoTALZhBwBwJFPaKqE6AaA+OwCAo2m9qLikfb96OAJAfXYAAEfzNu2VUJUAUN8eUqoZAKCmPRwrvofdVYciANTX+iE1+AO17eFOgBKqEgDqa/0JwAVAwBZav1yUUJUAUF9JW2YAgC1MactZAJUJAPWVtDUFoL7WdwKUUJUAUJctgMBRte5bXApUmQBQ1x6mqFqndOCY9rC+6HehGgGgrtZv/z/GIkBgG1Pa9y+2AlYkANTV+uGcArCdKW2VUI0AUJdLgIAjsxXwQASAuiwABI6s9ScAWwErEgDqMgMAHFnrRcYuBKpIAKhnD1sApwBsZw+fAISASgSAekramwKwnT3sMvooVCEA1LOHVOoaYGBLU6wDOAwBoB63AAIjaB0ASqhCAKinpC0HAAHXYCvgQQgA9ZS0ZQYAuIYpbVkEWIkAUI8dAMAIprRlDUAlAkA9zgAARvBT2jIDUIkAUM8eLgIC2Jo1AAchANThGmBgFFPa+ySsJgDUsYcpKTMAwDXs4drxElYTAOooacsOAOCaBIADEADqaD0d5e0fuCbrAA5AAKjDFkBgJGYADkAAqKOkrSkA1zOlLVsBKxAA6jADAIyk9cVjJawmANRR0tYUgOtp/QnADEAFAkAdJW21PpkLGItFgAcgAKxX0t4UgOvZw84jhwGtJACsV9KebYDANe3hMKDfhVUEgP45BAhooXUAMAOwkgCwXklb3v6BFqa0ZSHgSgLAek4BBEY0pa0SVhEA1nMGADAipwF2TgBYr6QtMwBAC1PomgCwnhkAYEStzx8pYRUBYD0BABiRTwCdEwDWK2nLKYBAC1PasgtgJQFgvdYP4Q8BuD73AXROAFinpL3Wt3IBY5rSnsOAVhAA1mmdQO0AAFpyHHDHBIB1LAAERtY6AHwUFhMA1jEDAIxsSlslLCYArOMYYGBkU+iWALCOGQCAdkpYTABYxxoAYGRT2rIVcIXfhjXMABzLq3c1LyzSsRzPd3kcsL4NtTgLoGMCwDolbQkA691c6vWlPovOZBRzu/nLpf58qbdhjdYnkWqzK/gE0LcpLHVzqTfv6hQdyUjm3/qUx9/+IY+zPixjBqBjAsA6Hr4+fZXHzv8mjK5c6ptLfRmWcCFQxwSAdVoHABcBvUzJY2f/eeAffZHHZ6OEl5hCtwSAdUrachHQ85U8vvWb7uWXzM/G/IyY2etHCYv9Jqzxt7Tl93s+U/4819tL/SE8l36wU2YAliuhF+cY/Hm+m0vdhl64EXAhAaBfU3iOEp05L3eOkP9cU+iSALBcCT0w+LPUXeiBK4EXEgD6NYUPKXnc7w1L3MSCwOdwJXCnBACO7I+BdWwZ/TCHAXVKAFiupC3HAH/YZ4F1bsKHTGlLAFhIAOiXAPBhN4F1nBvBYQkAy9l6sm86bmqY3y619X0rYREBoF9T+DWmBamlhF8zhS4JAAD0TNhfSABYrqQtawCAPbALoFMCQL8EAGAP3EraKQFgOakTgG4JAMu1DgBmAIA9aN0XlbCIANAvAQDYA31RpwQAABiQALCcNQAAPgF0SwBYrnUAmALQnk8AnRIAAGBAAgAADEgAWM4aAID29MULCQDLtX7ovg9Ae1PaEgAWEgAAYEACAAAMSAAAgAH9NsAWpkvdhxpOcdgLVCcALOMiID5kutSfQg03EQD2bu6TWvaLH0e/+GI+ASwjAAD8Xes+6aPwYgIAAAxIAACAAQkAADAgAQAABiQAAMCABAAAGJAAAAADEgAAYEACAAAMSAAAgAEJAAAwIAEAAAYkAADAgAQAABiQAAAAAxIAAGBAAgAADEgAAIABCQB9+jgA+9G6T/opvJgAsMyUtgQAYE9a90k/hhcTAABgQAIAAAxIAACAAQkAADAgAWC51otOPglAexYAdkoAWM5DByAAdEsAAIABCQAAMCABoF+/C0B7JW35BLCQALDclLY+CgACwEICAAAMSADol/sAAFhMAFhuSlsCALAHJW35BLCQAABAzwSAhQQAANawILlTAsByrVNnCUB7TgLslACwnIcOoD198UICQL8sAgT2QF/UKQFgue/TlkYH7EHrvmgKiwgAAKzhZaRTAkC/SgDaswiwUwLAclMAaE0AWEgA6FcJQHsldEkAWG4KAK1NYREBoF8W3gB7UEKXBIDlprQlAAC035LdLQGgb58EoJ0SuiUArDMFgFamsJgA0LffBaCdErolAKzTev+pTwDAyKawmACwTusAYCEg0FIJ3RIA1pnSlgAAtPRR2prCYgJA3wQAoCX3AHRMAFhnSlslAO0IAB0TANbx8AEjK2lLH7yCALDOT2mrBKAdMwAdEwDWaf3wlQC00zoATGExAWCdKQDjshC5YwLAOmYAgJGVtDWFxQSAdfbw/UkCB1rYQ9/jJsAVBIB1fkz7END6IA5gTCV0TQBYz2cAYEQWAHZOAFhPAABGJAB0TgBYb0pb1gAALbiNtHMCwHpmAIARmQHonACw3pS2zAAALZS0NYVVBID1Ws8ACABACyVtOQZ4JQFgvdb3AbwKwPX5BNA5AWC9b9OWGQCghZK2zACsJACst4dPAEIAcG1mADonAKw3pT2nAQLXtIdPj44BXkkAqMNWQGAkrd/+Tf9XIADUIQAAIylpawqrCQB1WAgIjKT1KYBmACoQAOowAwCMxALAAxAA6pjSVgnA9bReBDiF1QSAOlqvRi0BuB4zAAcgANThEwAwkpK2prCaAFDHHhYBWggIXMMe+pvWR7AfggBQxx5WpDoMCLiGkvamsJoAUMePaR8CXAoEXMMeDgGyDbACAaCeKW2VAGzv92lrClUIAPVMaasEYHslbXn7r0QAqGdKWxYBAtdQ0lbrRdeHIQDUM6UtawCAayhpawpVCAD1tN6WUgKwvZK2plCFAFCPswCAo9tDP2MNQCUCQD1T2isB2M4ePjV+F6oQAOrZw97U1ttzgGNzBsCBCAB1TWmrBGA7zgA4EAGgrtbrAEoAtuMa4AMRAOpyHDBwZK4BPhABoK7Wi1NKALZjBuBABIC6Ws8A2AoIbGUP/YtTACsSAOraw8NZAlDfHj4xTqEaAaCuKe3ZCghsYQ+zi9+HagSA+qa0VQJQX+uXC9P/lQkA9dkKCByRBYAHIwDUN6UtWwGBLZS0NYWqBID6bAUEjsgMwMEIAPVNaWteqPNJAOrZw8yiNQCVCQD1TWnPZwCgpj3sAHALYGUCQH1T2h8IVAJQT+sdAG4B3IAAsI0pbZkBAGoqacv0/wYEgG3YCggcSeuXCm//GxAAttE6AJgBAGpq3aeYAdiAALCN1sdVuhQIqMUlQAclAGzDpUDAUexhRtEdABsQALYxpT2XAgE1lLRnBmADAsB2prRlHQBQg0uADkoA2I6dAMARlLQ1hU0IANuZ0pYZAKCGkramsAkBYDsuBQKOwBbAgxIAtrOHh9alQMAae5hJnMImfhu2MqW9KcBab0NLLgHaiBmA7bi8AmAd/eiGBIBtTQFgKd//NyQAbMvDC7CcPnRDAsC2PLwAy01hMwLAtpxfDbCcl6gNCQDb8vACLPdT2IwAsK0pVrACLOUlakMCwPamAPBSBv+NCQDb8xADvNwUNiUAbG8KAC/l5WljAsD27AQAeDkBYGMCwPY8xAAv5+VpYwLA9qYA8FJT2JQAsL15G+AUAJ5rnjm1hXpjAsB1+AwA8HxT2JwAcB1vA8BzvQ2bEwCu4z/DaExf1jOF0egzr0AAuI4pEu1oplCLMDWW+ZPpFDYnAFzPX8JI3oZavgsj+SpcxW/CtXx8qW8uVcII/k+8xdQyt50fwgimPLYdrsAMwPXM05h/CiN4G4N/TXPbeRtGcA5XIwBc1310ZCO4D7X9ORzd2/idr8ongOsrefwU8HE4oimmMLfyEJ/Qjmq61B9i5uyqzABc33Sp/x+O6hy28m/hqP49Bv+r+9+hhelSP13q/4UjmVcv/0fYypTHmbP/G47ki5j6Z0Dzg/83dYj6JlzD026anp4N9cv1OjCwmzx+2+yhsap/XdZ0XJcQ0H89XOrTAP+9sOkufTVg9Vh3Mfi3MP+dz3/3PTwj6h/rTSzmhH9yitmAXmo+mObz0Nop2kwv9Sbe+uGD/nipr9NX4x6l5oH/Nt7696Tk8Td5SF/P0ijt5U0M/LvkHIB9mweZueHcXOpVHju6Eq5pelfzBSXzfQ5/DXs2t5fPor208OO7errM520e24vLnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJT/Aqv6sWH+SWhbAAAAAElFTkSuQmCC"
            />
        </Defs>
    </Svg>
);