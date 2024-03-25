function fshape ( symbol, id )
{
    symbol.select( id )
        .append( "rect" )
        .attr( "x", 18 )
        .attr( "y", 0 )
        .attr( "width", 64 )
        .attr( "height", 20 )
}
