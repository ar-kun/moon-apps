<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://i.ytimg.com/vi/6hB3S9bIaco/maxresdefault.jpg',
                'rating' => 9.3,
                'created_at' => now(),
                'is_featured' => true,
            ],
            [
                "name" => "The Godfather",
                "slug" => "the-godfather",
                "category" => "drama",
                "video_url" => "https://www.youtube.com/watch?v=sY1S34973zA",
                "thumbnail" => "https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg",
                "rating" => 9.2,
                'created_at' => now(),
                'is_featured' => false,
            ],
            [
                "name" => "The Dark Knight",
                "slug" => "the-dark-knight",
                "category" => "action",
                "video_url" => "https://www.youtube.com/watch?v=EXeTwQWrcwY",
                "thumbnail" => "https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg",
                "rating" => 9.0,
                'created_at' => now(),
                'is_featured' => false,
            ],
        ];
        Movie::insert($movies);
    }
}
