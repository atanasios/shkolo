<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['id', 'title', 'url', 'color'];

    protected $casts = [
        'color' => 'string',
    ];
}
