package com.codingdojo.pokemon;

public abstract class AbstractPokemon implements PokemonInterface {
    public static String newline = System.getProperty("line.separator");
    @Override
    public Pokemon createPokemon(String name, int health, String type) {
        Pokemon newPokemon = new Pokemon(name, health, type);
        return newPokemon;
    }
    @Override
    public String pokemonInfo(Pokemon pokemon) {
        return "Pokemon Name: " + pokemon.getName() + newline + "Current Health: " + pokemon.getHealth() + newline + "Pokemon Type: " + pokemon.getType();
    }
}