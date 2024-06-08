import { Hexagon } from '@/components/Shapes/hexagon';
import { Triangle } from '@/components/Shapes/triangle';
import { DiamondNarrow } from '@/components/Shapes/diamondNarrow';
import { Diamond } from '@/components/Shapes/diamond';
import { Square } from '@/components/Shapes/square';

export function Flower() {
    return (
        <div className="group min-w-[362px] h-[435px] relative ml-8 animate-spin-slow">
            <Hexagon className="absolute top-[190px] left-[130px]"/>
            <Triangle
                className="absolute top-[121px] left-[152px] group-hover:top-[116px] group-hover:left-[153px]"/>
            <Triangle className="absolute top-[267px] left-[153px] rotate-180 group-hover:top-[272px]"/>
            <Triangle
                className="absolute top-[158px] left-[213px] rotate-[62deg] group-hover:top-[155px] group-hover:left-[217px]"/>
            <Triangle
                className="absolute top-[158px] left-[92px] rotate-[-62deg] group-hover:top-[155px] group-hover:left-[88px]"/>
            <Triangle
                className="absolute top-[230px] left-[92px] rotate-[-117deg] group-hover:top-[234px] group-hover:left-[89px]"/>
            <Triangle
                className="absolute top-[229px] left-[214px] rotate-[117deg] group-hover:top-[232px] group-hover:left-[218px]"/>
            <DiamondNarrow
                className="absolute top-[-2px] left-[171px] rotate-[-15deg] group-hover:top-[-15px] group-hover:left-[173px]"/>
            <DiamondNarrow
                className="absolute top-[-68px] left-[161px] rotate-[15deg] group-hover:top-[-81px] group-hover:left-[159px]"/>
            <DiamondNarrow
                className="absolute top-[-71px] left-[276px] rotate-[77deg] group-hover:top-[-79px] group-hover:left-[283px]"/>
            <DiamondNarrow
                className="absolute top-[-128px] left-[281px] rotate-[47deg] group-hover:top-[-133px] group-hover:left-[291px]"/>
            <DiamondNarrow
                className="absolute top-[-78px] left-[282px] rotate-[132deg] group-hover:top-[-73px] group-hover:left-[292px]"/>
            <DiamondNarrow
                className="absolute top-[-135px] left-[277px] rotate-[102deg] group-hover:top-[-128px] group-hover:left-[285px]"/>
            <DiamondNarrow
                className="absolute top-[-135px] left-[171px] rotate-[195deg] group-hover:top-[-122px] group-hover:left-[173px]"/>
            <DiamondNarrow
                className="absolute top-[-265px] left-[144px] rotate-[-15deg] group-hover:top-[-252px] group-hover:left-[142px]"/>
            <DiamondNarrow
                className="absolute top-[-466px] left-[56px] rotate-[-78deg] group-hover:top-[-474px] group-hover:left-[49px]"/>
            <DiamondNarrow
                className="absolute top-[-523px] left-[51px] rotate-[-47deg] group-hover:top-[-528px] group-hover:left-[41px]"/>
            <DiamondNarrow
                className="absolute top-[-473px] left-[51px] rotate-[-132deg] group-hover:top-[-468px] group-hover:left-[41px]"/>
            <DiamondNarrow
                className="absolute top-[-529px] left-[55px] rotate-[-102deg] group-hover:top-[-522px] group-hover:left-[47px]"/>
            <Diamond
                className="absolute top-[-788px] left-[222px] rotate-[32deg] group-hover:top-[-801px] group-hover:left-[229px]"/>
            <Diamond
                className="absolute top-[-743px] left-[288px] rotate-[90deg] group-hover:left-[305px]"/>
            <Diamond
                className="absolute top-[-698px] left-[223px] rotate-[148deg] group-hover:top-[-685px] group-hover:left-[230px]"/>
            <Diamond
                className="absolute top-[-771px] left-[81px] rotate-[-149deg] group-hover:top-[-758px] group-hover:left-[74px]"/>
            <Diamond className="absolute top-[-966px] left-[15px] rotate-[-90deg] group-hover:left-[-2px]"/>
            <Diamond
                className="absolute top-[-1163px] left-[80px] rotate-[-32deg] group-hover:top-[-1176px] group-hover:left-[73px]"/>
            <Square
                className="absolute top-[50px] left-[190px] rotate-[62deg] group-hover:top-[28px] group-hover:left-[198px]"/>
            <Square
                className="absolute top-[50px] left-[114px] rotate-[-62deg] group-hover:top-[28px] group-hover:left-[106px]"/>
            <Square
                className="absolute top-[90px] left-[255px] rotate-[-90deg] group-hover:top-[75px] group-hover:left-[270px]"/>
            <Square
                className="absolute top-[90px] left-[50px] rotate-[-91deg] group-hover:top-[75px] group-hover:left-[35px]"/>
            <Square
                className="absolute top-[155px] left-[14px] rotate-[57deg] group-hover:top-[149px] group-hover:left-[-10px]"/>
            <Square
                className="absolute top-[153px] left-[291px] rotate-[33deg] group-hover:top-[147px] group-hover:left-[315px]"/>
            <Square
                className="absolute top-[224px] left-[292px] rotate-[57deg] group-hover:top-[230px] group-hover:left-[316px]"/>
            <Square
                className="absolute top-[226px] left-[13px] rotate-[-57deg] group-hover:top-[232px] group-hover:left-[-11px]"/>
            <Square
                className="absolute top-[290px] left-[50px] rotate-[-90deg] group-hover:top-[305px] group-hover:left-[35px]"/>
            <Square
                className="absolute top-[289px] left-[257px] rotate-[90deg] group-hover:top-[304px] group-hover:left-[272px]"/>
            <Square
                className="absolute top-[330px] left-[115px] rotate-[-29deg] group-hover:top-[352px] group-hover:left-[107px]"/>
            <Square
                className="absolute top-[328px] left-[192px] rotate-[28deg] group-hover:top-[350px] group-hover:left-[200px]"/>
        </div>
    )
}