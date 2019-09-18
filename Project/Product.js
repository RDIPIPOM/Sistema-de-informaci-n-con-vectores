export default class Product{
    constructor(code, name, cost, stock, description){
        this._code = code;
        this._name = name;
        this._cost = cost;
        this._stock = stock;
        this._description = description;
    }

    toString(){
        return '*Código: ' + this._code + '//Nombre: ' + this._name + '//Precio' + this._cost + '//Cantidad: ' + this._stock + 'Descripción: ' + this._description + '*'
    }
}

/*
ARTICULO
codigo
nombre
precio
cantidad
descripcion
toString();
*/