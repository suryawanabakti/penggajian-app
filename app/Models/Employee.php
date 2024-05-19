<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Employee extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public $with = ['user', 'position'];
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $employee = Employee::orderBy('created_at', 'desc')->first();
            if (empty($employee)) {
                $incrementing = 1;
            } else {
                $incrementing = $employee->id + 1;
            }

            $model->code = "0" . $incrementing;
        });
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function position(): BelongsTo
    {
        return $this->belongsTo(Position::class);
    }
}
