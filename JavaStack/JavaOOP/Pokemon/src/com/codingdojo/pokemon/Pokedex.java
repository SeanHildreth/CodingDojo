package com.codingdojo.pokemon;
import java.util.ArrayList;

public class Pokedex extends AbstractPokemon implements PokemonInterface {
    private ArrayList<Pokemon> myPokemon = new ArrayList<Pokemon>();
    public addPokemon(Pokemon pokemon) {
        myPokemon.add(Pokemon);
    }
    @Override
    public void listPokemon(){
        System.out.println(myPokemon);
    }
}